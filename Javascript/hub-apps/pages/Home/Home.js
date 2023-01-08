import { Header } from "../../components/Header/Header"
import { Dashboard } from "../Dashboard/Dashboard"
import { Login } from "../Login/Login"

import './Home.css'


export const Home = () => {

    document.querySelector('#app').innerHTML = `
        <div id="header"></div>
        <div id="container"></div>
        <div id="footer"></div>
    `
    Header()
    
    localStorage.getItem('user') ? Dashboard() : Login()
    
}