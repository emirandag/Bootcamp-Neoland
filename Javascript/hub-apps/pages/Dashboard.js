import { Pokeapi } from "./Pokeapi"
import { Tresenraya } from "./Tresenraya"


export const Dashboard = (name) => {
    document.querySelector('#container').innerHTML = `

        <div>
            <h2>Bienvenido  ${name} </h2>
            <div id="dashboard">
                <button id="3enraya" class="btn-games">3 en Raya</button>
                <button id="whakatopo" class="btn-games">Whaka-topo</button>
                <button id="memorygame" class="btn-games">Memory Game</button>
                <button id="hangman" class="btn-games">HangMan</button>
                <button id="pokeapi" class="btn-games">PokeApi</button>
                <button id="quizneo" class="btn-games">Quiz-Neo</button>
            </div>
        </div>
        
    `
    actionDashboard()
} 




const actionDashboard = () => {

    const buttonsGame = document.querySelectorAll('.btn-games')

    for (const button of buttonsGame) {
        //console.log(button);
        button.addEventListener('click', addListener)
    }
}    

const addListener = (event) => {

    switch(event.target.id) {
        case "3enraya": 
            console.log('Has clicado en el 3 en Raya');
            Tresenraya()        
            break;
        case "whakatopo": 
            console.log('Has clicado en el Whaka-topo');
            break;
        case "memorygame": 
            console.log('Has clicado en el Memory Game');
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


