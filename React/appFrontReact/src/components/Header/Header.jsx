import './Header.css'
import React from 'react'
import useResize from '../../hooks/useResize'
import Nav from '../Nav/Nav'

const Header = () => {
    const { ancho } = useResize()
    return (
        <header className='header'>
            {
                ancho > 600
                    ?
                    <Nav />
                    :
                    <div className='nav-hamburger'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            }
        </header>
    )
}

export default Header