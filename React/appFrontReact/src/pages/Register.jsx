import { useForm } from 'react-hook-form'

import { useEffect, useState } from 'react'

import { registerUser } from '../services/API_user/user.service'
import Uploadfile from '../components/Uploadfile'
import { Navigate } from 'react-router-dom'
import useUserError from '../hooks/useUserError'

const Register = () => {
    const { register, handleSubmit } = useForm()
    const [res, setRes] = useState({})
    const [registerOk, setRegisterOk] = useState(false);
    const [send, setSend] = useState(false)

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById('file-upload').files

    if (inputFile.length !== 0) {
      // Cuando hayan puesto una imagen por el input

      const customFormData = {
        ...formData,
        image: inputFile[0]
      }
      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);

      //! me llamo al servicio
    } else {
      const customFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);

      ///! me llamo al servicio
    }
  };

        useEffect(() => {
          //console.log(res);
          useUserError(res, setRegisterOk);
          //console.log('Ha sido registrado? ->'+registerOk);
          //setRegisterOk(() => true)
        }, [res]);

        if (registerOk) {
          return <Navigate to="/checkCode" />;
        }

  return (
    <>
         <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>It's free and only takes a minute.</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              username
            </label>
          </div>
          <div className="password_container form-group">
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              password
            </label>
          </div>
          <div className="email_container form-group">
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              email
            </label>
          </div>
          <div className="sexo">
            <input
              type="radio"
              name="sexo"
              id="male"
              value="male"
              {...register("gender")}
            />
            <label htmlFor="male" className="label-radio hombre">
              Hombre
            </label>
            <input
              type="radio"
              name="sexo"
              id="female"
              value="female"
              {...register("gender")}
            />
            <label htmlFor="female" className="label-radio mujer">
              Mujer
            </label>
          </div>

          <div className="rol">
            <input
              type="radio"
              name="rol"
              id="admin"
              value="admin"
              {...register("rol")}
            />
            <label htmlFor="admin" className="label-radio admin">
              Admin
            </label>
            <input
              type="radio"
              name="rol"
              id="manager"
              value="manager"
              {...register("rol")}
            />
            <label htmlFor="manager" className="label-radio manager">
              Manager
            </label>
            <input
              type="radio"
              name="rol"
              id="user"
              value="user"
              {...register("rol")}
            />
            <label htmlFor="user" className="label-radio user">
              User
            </label>
          </div>

           <Uploadfile /> 

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Register
            </button>
          </div>
          <p className="bottom-text">
            <small>
              By clicking the Sign Up button, you agree to our{" "}
              <a href="#">Terms & Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </small>
          </p>
        </form>
      </div>
      <footer>
        <p>
          Already have an account? <a href="#">Login Here</a>
        </p>
      </footer>
    </>
  )
}

export default Register