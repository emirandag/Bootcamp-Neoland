import { Login } from "../../pages/Login";
import { Button } from "../Button/Button";
import "./Header.css";


export const Header = () => {
    
    const createHeader = document.querySelector('#header')

    createHeader.innerHTML = `
        <nav id="id-nav">
            
            <div class="nav-left"></div>
            <div class="nav-right">
                <button id="color-mode" class="btn">Color Mode</button>
                <div id="search">
                    🏠
                    ${Button("logout","Logout")}
                </div>
            </div>
        </nav>
    `
    const bar = document.querySelector('#search')

    localStorage.getItem('user') ? bar.classList.toggle('search-show') : bar.classList.toggle('search-hidden')

    actionBtnColor()
    logout()
}


const actionBtnColor = () => {
    const btnColor = document.querySelector('#color-mode')
 
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
    const menu = document.querySelector('#search')

    btnLogout.addEventListener('click', () => {
 
        localStorage.removeItem('user')
        menu.classList.toggle('search-hidden')
        Login()
    })
}

