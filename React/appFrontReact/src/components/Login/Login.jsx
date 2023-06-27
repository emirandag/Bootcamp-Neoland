import React from 'react'
import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
      } = useForm();
      const { login } = useAuth();
    
      const onSubmit = (data) => login(data);
    
      return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input {...register('user', { required: true })} placeholder='Usuario'/>
          {errors.user && <span>* Este campo es requerido</span>}
          <input type='password' {...register('pass', { required: true })} placeholder='Contraseña' />
          {errors.pass && <span>* Este campo es requerido</span>}
          {/* <input type="submit" /> */}
          <ButtonStyle variant='primary' theme={theme} type="submit">Enviar</ButtonStyle>
        </form>
      );
}

export default Login