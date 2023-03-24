import './BasicMenu.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          fontSize: '1.5rem',
        }}
      >
        <GiHamburgerMenu />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          
        }}
      >
        <MenuItem onClick={handleClose}>
            <NavLink to="">
                <Button variant="text" color='secondary'>Home</Button>
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <NavLink to="news">
                <Button variant="text" color='secondary'>Noticias</Button>
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <NavLink to="news/sports">
                <Button variant="text" color='secondary'>Deportes</Button>
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <NavLink to="news/economy">
                <Button variant="text" color='secondary'>Economía</Button>
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <NavLink to="news/technology">
                <Button variant="text" color='secondary'>Tecnología</Button>
            </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}