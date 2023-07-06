import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useLoginError } from '../hooks';
import { Link, Navigate } from 'react-router-dom';
import { loginUser } from '../services/API_user/user.service';
import { useAuth } from '../context/authContext';

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const [res, setRes] = useState({});
    const [send, setSend] = useState(false);
    const [loginOk, setLoginOk] = useState(false);
    const { userLogin, setUser } = useAuth()

    /**
     * 1.- Función que gestiona el formulario
     */
    const formSubmit = async (formData) => {
        //console.log(formData);
        setSend(true);
        setRes(await loginUser(formData));
        setSend(false);
    }

    /**
     * 2.- UseEffects que gestionan las respuestas y los errores
     */
    useEffect(() => {
      setUser(() => null)
    }, [])
    
    useEffect(() => {
      //console.log("Respuesta: "+res);
      useLoginError(res, setLoginOk, userLogin, setRes)
    }, [res] )

    /**
     * 3.- Estados de navegación o estados de funcionalidades OK
     */
    if (loginOk) {
      if (res.data.user.check == false) {
        return <Navigate to="/checkCode" />
      } else {
        return <Navigate to="/dashboard" />
      }
    }
  return (
<>
         <div className="form-wrap">
        <h1>Sign in</h1>
        {/* <p>It's free and only takes a minute.</p> */}
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              email
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
          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              {send ? "Cargando ....." : "Login"}
            </button>
          </div>
          <p className="bottom-text">
            <small>
              Have you forgotten the password?
              <Link to="/forgotpassword" className="anchorCustom">
                Change password
              </Link>
            </small>
          </p>
          </form>
          </div>
          <div className="footerForm">
        <p className="parrafoLogin">
          Are you not registered? <Link to="/register">Register Here</Link>
        </p>
      </div>
          </>
  )
}
