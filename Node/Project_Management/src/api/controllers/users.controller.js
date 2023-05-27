const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const setError = require('../../helpers/handle-error');
const { deleteImgCloudinary } = require('../../middlewares/files.middleware');
const { generateToken } = require('../../utils/token');
const randomPassword = require('../../utils/randomPassword');
dotenv.config();

/**
 * ---------------------- REGISTER -----------------------
 */
const register = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await User.syncIndexes();

    const email = process.env.NODEMAILER_EMAIL;
    const password = process.env.NODEMAILER_PASSWORD;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });

    const confirmationCode = Math.floor(
      Math.random() * (999999 - 100000) + 100000
    );

    const newUser = new User({ ...req.body, confirmationCode });

    if (req.file) {
      newUser.photo = req.file.path;
    } else {
      newUser.photo =
        'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';
    }

    const userExists = await User.findOne({
      email: newUser.email,
      name: newUser.name,
    });

    if (userExists) {
      deleteImgCloudinary(catchImg);
      return next(setError(409, 'This user already exist'));
    } else {
      const createUser = await newUser.save();
      createUser.password = null;

      const mailOptions = {
        from: email,
        to: req.body.email,
        subject: 'Code confirmation',
        text: `Your code is ${confirmationCode}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      return res.status(201).json({
        user: createUser,
        confirmationCode: confirmationCode,
      });
    }
  } catch (error) {
      deleteImgCloudinary(catchImg);
    return next(
      setError(error.code || 500, error.message || 'failed create user')
    );
  }
};


/**
 * ------------------------ CHECK NEW USER -----------------------------
 */
const checkNewUser = async (req, res, next) => {
  try {
    //traer del body el email y codigo de confirmación
    const { email, confirmationCode } = req.body

    //Comprovar que el usuario exista, porque si no existe no se puede hacer ninguna verificación
    const userExists = await User.findOne({ email })
    if (!userExists) {
      return res.status(404).json("User not found")
    } else {
      //Comparamos el código del body y del userExists

      if (confirmationCode === userExists.confirmationCode) {
        //Si existe cambiamos la propiedad check a true
        await userExists.updateOne({ check: true })
        //Testeamos que el usuario se haya actualizado correctamente
        const updateUser = await User.findOne({ email })

        return res.status(200).json({
          testCheckOk: updateUser.check == true ? true : false
        })
      } else {
        // En caso de equivocarse con el código lo borramos de la base de datos y se lo envía al registro
        await User.findByIdAndDelete(userExists._id)

        //Borramos la imagen
        deleteImgCloudinary(userExists.photo)

        return res.status(200).json({
          userExists, 
          check: false,
          delete: (await User.findUserById(userExists._id)) ? 'error delete user' : 'Ok - user deleted'
        })
      }
    }
  } catch (error) {
    return next(setError(500, 'General error check code'))
  }
}

/**
 * ------------------------- RESEND CODE CONFIRMATION --------------------------------------
 */
const resendCode = async (req, res, next) => {
  try {
    //Configuramos NODEMAILER 
    const email = process.env.NODEMAILER_EMAIL
    const password = process.env.NODEMAILER_PASSWORD

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password
      }
    })

    const userExists = await User.findOne({ email: req.body.email })

    if (userExists) {
      const mailOptions = {
        from: email,
        to: req.body.email,
        subject: 'Confirmation code',
        text: `tu codigo es ${userExists.confirmationCode}`
      }

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          return res.status(200).json({
            resend: true
          })
        }
      })
    } else {
      return res.status(404).json('User not found')
    }
  } catch (error) {
    return next(setError(500, error.message || 'Error general send code'))
  }
}


/**
 * ----------------------- LOGIN --------------------------------
 */
const login = async (req, res, next) => {
  try {
    //Recuperamos el email y password del body
    const { email, password } = req.body

    //Buscamos el usuario en la base de datos
    const user = await User.findOne({ email })

    //Comprobamos si hay o no usuario
    if (!user) {
      return res.status(404).json('User not found')
    } else {
      //Comparamos la contraseña introducida por el body y la existente en la base de datos
      if (bcrypt.compareSync(password, user.password)) {
        //Si es igual, generaos un token
        const token = generateToken(user._id, email)

        //devolvemos el usuario y el token
        return res.status(200).json({
          user: {
            email,
            _id: user._id
          },
          token
        })
      } else {
        
        return res.status(404).json('Password invalid')
      }      
    }
  } catch (error) {
    return next(
    setError(500 || error.code, 'General error login' || error.message)
    )
  }
}


/**
 * -------------------- RESET DE CONTRASEÑA ANTES DEL LOGIN
 */
const forgotPassword = async (req, res, next) => {
  try {
    // Recuperamos el email del body
    const { email } = req.body

    //Verificamos si el usuario está registrado en la base de datos
    const userDb = await User.findOne({ email })
    if (userDb) {
      //si el usuario existe hacemos redirect al otro controlador
      return res.redirect(`http://localhost:8080/api/v1/users/forgotpassword/sendPassword/${userDb._id}`)
    } else {
      return res.status(404).json('User not register')
    }
  } catch (error) {
    return next(error)
  }
}

const sendPassword = async (req, res, next) => {
  try {
    // Recibimos el ID por parámetro
    const { id } = req.params
    const userDb = await User.findById(id)

    //Configuramos el envío del correo electrónico
    const email = process.env.NODEMAILER_EMAIL
    const password = process.env.NODEMAILER_PASSWORD

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password
      }
    })

    //generamos una contraseña random
    let passwordSecure = randomPassword()

    const mailOptions = {
      from: email,
      to: userDb.email,
      subject: '-----',
      text: `User: ${userDb.name}. Your new code login is ${passwordSecure} Hemos enviado esto porque tenemos una solicitud de cambio de contraseña, si no has sido ponte en contacto con nosotros, gracias.`
    }

    //enviamos el correo y dentro de envío gestionamos el guardado de la nueva contraseña
    transporter.sendMail(mailOptions, async (error) => {
      if (error) {
        console.log(error);

        return res.status(404).json("Don't sent email and don't upsate user")

      } else {
        //encriptamos la contraseña que se ha generado arriba
        const newPasswordHash = bcrypt.hashSync(passwordSecure, 10)

        //Una vez hasheada la contraseña la actualizamos en la base de datos
        await User.findByIdAndUpdate(id, { password: newPasswordHash })

        //Testeamos que se ha hecho correctamente
        const updateUser = await User.findById(id)

        if (bcrypt.compareSync(passwordSecure, updateUser.password)) {
          res.status(200).json({
            updateUser: true,
            sendPassword: true
          })
        } else {
          // Si no son iguales, enviamos al front que el usuario no se ha actualizado
          // aunque si ha recibido un correo con la contraseña que no es válida
          return res.status(404).json({
            updateUser: false,
            sendPassword: true
          })
        }
      }
    })
  } catch (error) {
    return next(error)
  }
}

/**
 * ------------------------- Cambio de contraseña estando logueado ----------------------------------------------
 */
const modifyPassword = async(req, res, next) => {
  try {
    const { password, newPassword } = req.body

    const { _id } = req.user

    if (bcrypt.compareSync(password, req.user.password)) {
      const newPasswordHash = bcrypt.hashSync(newPassword, 10)
      await User.findByIdAndUpdate(_id, { password: newPasswordHash })

      const updateUser = await User.findById(_id)

      if (bcrypt.compareSync(newPassword, updateUser.password)) {
        return res.status(200).json({
          updateUser: true
        })
      } else {
        return res.status(404).json({
          updateUser: false
        })
      }
    } else {
      return res.status(404).json('password not match');
    }
  } catch (error) {
    return next(error);
  }
}


/**
 * ----------------------------- UPDATE USER ---------------------------------
 */
const update = async (req, res, next) => {
  let catchImg = req.file?.path

  try {
    // actualizamos los indexes de los elementos unicos por si han modificado
    await User.syncIndexes()

    //Instanciamos un nuevo modelo de usuario
    const patchUser = new User(req.body)

     // si tenemos el file le metemos el path de cloudinary
     if (req.file) {
      patchUser.photo = req.file.path
     }

    // estas cosas no quiero que me cambien por lo cual lo cojo del req.user gracias a que esto es con auth
    patchUser._id = req.user._id
    patchUser.password = req.user.password
    patchUser.rol = req.user.rol
    patchUser.confirmationCode = req.user.confirmationCode
    patchUser.check = req.user.check
    patchUser.email = req.user.email

    // Actualizamos en la base de datos con el ID
    await User.findByIdAndUpdate(req.user._id, patchUser)

    // Borramos en Cloudinary la imagen antigua
    if (req.file) {
      deleteImgCloudinary(req.user.photo)
    }

    // Hacemos test en runtime
    // Buscamos el usuario actualizado
    const updateUser = await User.findById(req.user._id)

    // Cogemos las keys del body
    const updateKeys = Object.keys(req.body)

    //Guardamos los test en una variable
    const testUpdate = []

    updateKeys.forEach((item) => {
      if (updateUser[item] == req.body[item]) {
        testUpdate.push({
          [item]: true
        })
      } else {
        testUpdate.push({
          [item]: false
        })
      }
    })

    if (req.file) {
      updateUser.photo == req.file.path
      ? testUpdate.push({ file: true })
      : testUpdate.push({ file: false })
    }

    return res.status(200).json({
      testUpdate
    })
  } catch (error) {
    deleteImgCloudinary(catchImg)
    return next(error)
  }
}


/**
 * ------------------------------ DELETE USER ---------------------------------
 */
const deleteUser = async (req, res, next) => {
  try {
    const { _id } = req.user
    await User.findByIdAndDelete(_id)
    if (await User.findById(_id)) {
      return res.status(404).json("Don't delete")
    } else {
      deleteImgCloudinary(req.user.photo)
      return res.status(200).json('Ok delete')
    }
  } catch (error) {
    return next(error)
  }
}

module.exports = { register, checkNewUser, resendCode, login, forgotPassword, sendPassword, modifyPassword, update, deleteUser };
