import './Login.css'
import { Dashboard } from "./Dashboard";
import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { Header } from '../components/Header/Header';


export const Login = () => {
  document.querySelector("#container").innerHTML = `
        <div>
            <h1>NEOLAND HUB-GAMES</h1>

            <div class="form">
                <h3>Introduce tu nombre</h3>
                ${Input("Login")}
                <p id="msg" hidden>Este campo no puede estar vacio</p>
                ${Button("Login")}
            </div>
        </div>
    `;
    Header()
  actionLogin()
};


const actionLogin = () => {
    const btnName = document.querySelector('#login-btn')
    const inputName = document.querySelector('#login-input')
    const msg = document.querySelector('#msg')
    btnName.addEventListener('click', () => {

        if (inputName.value === "") {
            inputName.style.border = '1px solid red'
            msg.hidden = false
        } else {
            localStorage.setItem("user", inputName.value)
            Dashboard(inputName.value)
        }
        
    })


}
