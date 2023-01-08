import { Header } from "../../components/Header/Header"
import { MemoryGame } from "../MemoryGame/MemoryGame"
import { Pokeapi } from "../Pokeapi/Pokeapi"
import { Tresenraya } from "../Tresenraya/Tresenraya"
import { WhakaTopo } from "../WhakaTopo/WhakaTopo"

import './Dashboard.css'



export const Dashboard = () => {
    document.querySelector('#container').innerHTML = `

        <div id="dashboard">
            <h2>Bienvenido  ${localStorage.getItem('user') ? localStorage.getItem('user') : "usuario"} </h2>
            <div id="games">
                <div class="btn-games"><img id="3enraya" src="images/games/3enraya.png" /></div>
                <div class="btn-games"><img id="whakatopo" src="images/games/mole.png" /></div>
                <div class="btn-games"><img id="memorygame" src="images/games/memorygame.png" /></div>
                <div class="btn-games"><img id="hangman" src="images/games/hangman.png" /></div>
                <div class="btn-games"><img id="pokeapi" src="images/games/pokeapi.png" /></div>
                <div class="btn-games"><img id="quizneo" src="images/games/quiz.png" /></div>
            </div>
        </div>
        
    `
    actionDashboard()
    Header()
} 




const actionDashboard = () => {

    const buttonsGame = document.querySelectorAll('.btn-games')

    for (const button of buttonsGame) {
        //console.log(button);
        button.addEventListener('click', addListener)
    }
}    

const addListener = (event) => {
    console.log(event.target);
    switch(event.target.id) {
        case "3enraya": 
            console.log('Has clicado en el 3 en Raya');
            Tresenraya()        
            break;
        case "whakatopo": 
            WhakaTopo()
            console.log('Has clicado en el Whaka-topo');
            break;
        case "memorygame": 
            console.log('Has clicado en el Memory Game');
            //MemoryGame()
            break;
        case "hangman": 
            console.log('Has clicado en el HangMan');
            break;
        case "pokeapi": 
            console.log('Has clicado en la PokeApi');
            Pokeapi()
            break;
        case "quizneo": 
            console.log('Has clicado en el Quiz-Neo');
            break;
        default:
            //console.log('No estás clicando ningún boton');
            break;
    }

}


