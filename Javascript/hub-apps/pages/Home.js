import { Header } from "../components/Header"
import { Login } from "./Login"


export const Home = () => {

    document.querySelector('#app').innerHTML = `
        <div id="header"></div>
        <div id="container"></div>
    `

    Header()
    Login()
}