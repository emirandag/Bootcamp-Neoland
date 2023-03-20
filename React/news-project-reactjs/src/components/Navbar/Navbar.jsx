import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider/AuthProvider';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import BasicMenu from '../BasicMenu/BasicMenu';
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: purple[500],
    },
  },
});

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <ThemeProvider theme={theme}>
      <div className="navbar">
        <div>
          <div className="menu-hamburger">
            <BasicMenu />
          </div>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="">
                <Button variant="text">Home</Button>
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="news">
                    <Button variant="text">Noticias</Button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="news/sports">
                    <Button variant="text">Deportes</Button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="news/economy">
                    <Button variant="text">Economía</Button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="news/technology">
                    <Button variant="text">Tecnología</Button>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className="login-nav">
          {!user ? (
            <NavLink to="login">
              <Button variant="outlined" color="primary">
                Login
              </Button>
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
};

export default Navbar;
