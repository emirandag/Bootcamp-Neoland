
import { Button } from '@mui/material'
import { useRef } from 'react'
import { useAuth } from '../../contexts/AuthProvider/AuthProvider'

const Login = () => {
    const textInput = useRef(null)
  const {user, login} = useAuth()
  return (
    <div className='login'>
        {!localStorage.getItem('user') && (
            <>
                <h2>Introduzca su nombre de usuario</h2>
                <input type="text" ref={textInput} />
                <Button variant='contained' onClick={() => login(textInput.current.value)}>Validar</Button>
            </>
        )}
    </div>
  )
}

export default Login