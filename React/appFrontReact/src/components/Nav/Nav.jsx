import './Nav.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav'>
        <NavLink to='/'><button className='btn-nav'>HOME</button></NavLink>
        <NavLink to='/dashboard'><button className='btn-nav'>DASHBOARD</button></NavLink>
        <NavLink to='/login'><button className='btn-nav'>LOGIN</button></NavLink>
        <NavLink to='/register'><button className='btn-nav'>REGISTER</button></NavLink>
        <NavLink to='/gallery'><button className='btn-nav'>GALLERY</button></NavLink>
        <NavLink to='/details'><button className='btn-nav'>DETAILS</button></NavLink>
        <NavLink to='/profile'><button className='btn-nav'>PROFILE</button></NavLink>
    </nav>
  )
}