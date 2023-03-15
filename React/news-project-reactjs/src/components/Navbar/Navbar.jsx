import './Navbar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext, useAuth } from '../../contexts/AuthProvider/AuthProvider'
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: purple[500],
    },
  },
});

const Navbar = () => {
 const { user, logout } = useAuth()
  return (
    <ThemeProvider theme={theme}>
<div className="navbar">
      <div></div>
      <nav>
        <ul>
          <li>
            <NavLink to=""><Button variant="text">Home</Button></NavLink>
          </li>
          <li>
            <NavLink to="news"><Button variant="text">Noticias</Button></NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="news/sports"><Button variant="text">Deportes</Button></NavLink>
              </li>
              <li>
                <NavLink to="news/economy"><Button variant="text">Economía</Button></NavLink>
              </li>
              <li>
                <NavLink to="news/technology"><Button variant="text">Tecnología</Button></NavLink>
              </li>
              {/* <li>
                <NavLink to="/" onClick={() => logout()}>
                  Logout
                </NavLink>
              </li> */}
            </>
          )}
        </ul>
      </nav>
      <div className="login-nav">
        {!user ? (
          <NavLink to="login">
            <Button variant="outlined" color='primary'>Login</Button>
          </NavLink>
        ) : (
          <NavLink to="/" onClick={() => logout()}>
            <Button variant="outlined">Logout</Button>
          </NavLink>
        )}
      </div>
    </div>
    </ThemeProvider>
    
  );
}

export default Navbar