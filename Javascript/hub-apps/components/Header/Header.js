import { Login } from "../../pages/Login/Login";
import { Button } from "../Button/Button";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import "./Header.css";


export const Header = () => {
    
    const createHeader = document.querySelector('#header')

    createHeader.innerHTML = `
        <nav id="id-nav">
            
            <div class="nav-left"></div>
            <div class="nav-right">
                ${Button("color-mode","Color-Mode")}
                <div id="search">
                    <img id="home" src="images/home.png" /> 
                    ${Button("logout","Logout")}
                </div>
            </div>
        </nav>
    `
    const menu = document.querySelector('#search')

    localStorage.getItem('user') ? menu.classList.toggle('search-show') : menu.classList.toggle('search-hidden')

    
    
    
    
    actionBtnColor()
    logout()
}


const actionBtnColor = () => {
    const btnColor = document.querySelector('#color-mode-btn')
 
    btnColor.addEventListener('click', () => {
        
        document.body.style.backgroundColor = randomColor()
    })
}


const randomColor = () => {
    const valuesHex = '0123456789ABCDEF' 
    let colorCodeHex = "#"
    for (let code = 0; code < 6; code++) {
        colorCodeHex += valuesHex[Math.floor(Math.random()*valuesHex.length)]
    }   
    return colorCodeHex
}

const logout = () => {
    const btnLogout = document.querySelector('#logout-btn')

    btnLogout.addEventListener('click', () => {
        localStorage.removeItem('user')
        Login()
    })

    const home = document.querySelector('#home')
    home.addEventListener('click', () => {
        Dashboard()
    })
}

