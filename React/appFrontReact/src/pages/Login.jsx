import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import useLoginError from '../hooks/useUserError';
import { Navigate } from 'react-router-dom';
import { loginUser } from '../services/API_user/user.service';


const Login = () => {

    const { register, handleSubmit } = useForm();
    const [res, setRes] = useState({});
    const [loginOk, setLoginOk] = useState(false);
    const [send, setSend] = useState(false);

    const formSubmit = async (formData) => {
        console.log(formData);
        setSend(true);
        setRes(await loginUser(formData));
        setSend(false);
    }

    useEffect(() => {
      console.log(res);
        useLoginError(res, setLoginOk)
    }, [res] )


    if (loginOk) {
      console.log('Usuario logueado');

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
              Login
            </button>
          </div>
          </form>
          </div>
          </>
  )
}

export default Login