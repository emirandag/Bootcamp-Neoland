import './WhakaTopo.css'

export const WhakaTopo = () => {
    const container =  document.querySelector('#container')

    container.innerHTML = `
        <div class="grid-header">
            <h2 id="score">Puntos: 0</h2>
            <h2 id="time">Tiempo restante: 30</h2>
            <button id="reset-game" class="btn" disabled>Reiniciar</button>
        </div>
        <div id="board" class="grid-body">
        </div>

    `
    printBoard()
    actionGame()
}

const printBoard = () => {
    const boardId = document.querySelector('#board')

    for (let index = 0; index < 16; index++) {
        boardId.innerHTML += `<div id="${index}" class="grid-game"></div>`

    }
}

const actionGame = () => {


    countdown()
    positionTopo()
}


const countdown = () => {
    const timeId = document.querySelector('#time')
    let totalTime = 30

    const gameTime = setInterval(() => {
        totalTime--
        timeId.textContent = `Tiempo restante: ${totalTime}`
        if (totalTime === 0) {
            
            clearInterval(gameTime)
            resetGame()

        }
    }, 1000);
}

const positionTopo = () => {
    const cuadros = document.querySelectorAll('.grid-game')
    const scoreId = document.querySelector('#score')
    const timeId = document.querySelector('#time')
    
    let position;
    
    const moveTopo = setInterval(() => {

        for (const cuadro of cuadros) {
            cuadro.innerHTML = "" 
        }
        position = Math.floor(Math.random() * cuadros.length);
        
        //console.log(position);
        //console.log(cuadros[position])
        cuadros[position].innerHTML = `<img src="images/games/topo.png" />`
        console.log('Posición: '+position);

        if (timeId.textContent === "Tiempo restante: 0") {
            clearInterval(moveTopo)
            timeId.textContent = `Tiempo agotado. Reinicia el juego`
        }
    }, 2000);
    

    let sumPoints = 0
    
    cuadros.forEach((cuadro, index) => {

        
        cuadro.addEventListener('click', (event) => {
            console.log(index);


            if (index === position) {
                
                sumPoints++
                //console.log("Al final: " + position);
                console.log("Puntos: "+sumPoints);
                scoreId.textContent = `Puntos: ${sumPoints}`
            }
        })
    });
    
}

const countPoints = () => {

}

const resetGame = () => {
    const resetButton = document.querySelector('#reset-game')
    resetButton.removeAttribute('disabled')
    resetButton.addEventListener('click', (event) => {
        WhakaTopo()
    })
    //return resetButton
}