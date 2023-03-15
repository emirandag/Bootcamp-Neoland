import './Login.css'
import { Button, Input, TextField } from '@mui/material'
import { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthProvider/AuthProvider'
const Login = () => {
    const textInput = useRef(null)
  const {user, login} = useAuth()
  const [validateInput, setValidateInput] = useState('');

  const handleChange = event => {
    setValidateInput(event.target.value);
  }
  return (
    <div className='login'>
        {/* {!localStorage.getItem('user') && (
            <> */}
                <h2>Introduzca su nombre de usuario</h2>
                <input id='message' type="text" ref={textInput} onChange={handleChange} />
                {/* <TextField type='text' id="outlined-basic" label="Outlined" variant="outlined" ref={textInput}/> */}
                {/* <Input type='text' placeholder="Placeholder" inputProps={ariaLabel} ref={textInput} /> */}
                
                <Button disabled={validateInput === ''} variant='contained' onClick={() => login(textInput.current.value)}>Validar</Button>
                
            {/* </>
        )} */}
    </div>
  )
}

export default Login