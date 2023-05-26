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
      newUser.image = req.file.path;
    } else {
      newUser.image =
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

module.exports = { register };
