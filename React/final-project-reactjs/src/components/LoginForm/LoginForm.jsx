import './LoginForm.css'
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthProvider';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();

  const onSubmit = (data) => login(data);

  //console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input {...register('user', { required: true })} />
      {errors.user && <span>* Este campo es requerido</span>}
      {/* <input type="submit" /> */}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default LoginForm;