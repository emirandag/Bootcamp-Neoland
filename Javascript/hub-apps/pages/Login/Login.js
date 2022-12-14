import './Login.css'
import { Dashboard } from "../Dashboard/Dashboard";
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Header } from '../../components/Header/Header';


export const Login = () => {
    document.querySelector("#container").innerHTML = `
        <div>
            <h1>NEOLAND HUB-GAMES</h1>

            <div class="form">
                <h3>Introduce tu nombre</h3>
                ${Input("login", "Nombre")}
                ${Button("login","Login")}
            </div>
        </div>
    `
    Header()
    actionLogin()
};


const actionLogin = () => {
    const btnName = document.querySelector('#login-btn')
    const inputName = document.querySelector('#login-input')
    const showNav = document.querySelector('#search')
    btnName.addEventListener('click', () => {

        if (inputName.value === "") {
            inputName.style.border = '1px solid red'
            
            inputName.placeholder = `❌ ¡No puede estar vacio!`
        } else {
            localStorage.setItem("user", inputName.value)
            showNav.classList.toggle('search-show')
            Dashboard(inputName.value)
        }
        
    })


}
