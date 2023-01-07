import './Tresenraya.css'

export const Tresenraya = () => {
    
    printBoard()
    
    
}

const printBoard = () => {
    const container =  document.querySelector('#container')

    container.innerHTML = `
        <div class="grid-content">
            <div class="grid-header">
                <h2>Movimientos: 9</h2>
                <button id="reset-game" class="btn" disabled>Reiniciar</button>
                <!--
                <div id="select-gamer">
                <button id="one-gamer" class="btn">1 Jugador</button>
                <button id="two-gamer" class="btn">2 Jugadores</button>
                </div>
                -->
            </div>
            <div class="grid-body">
                <div class="grid-game"></div>
                <div class="grid-game"></div>
                <div class="grid-game"></div>
                <div class="grid-game"></div>
                <div class="grid-game"></div>
                <div class="grid-game"></div>
                <div class="grid-game"></div>
                <div class="grid-game"></div>
                <div class="grid-game"></div>
            </div>
        </div>
    `
    //listenerRaya()
    //actionGame()
    matchWithTwoGamers()
}



const matchWithTwoGamers = () => {
    const spaces = document.querySelectorAll('.grid-game')
    const infoGame = document.querySelector(".grid-header > h2")
    //const disableGame = document.querySelector('.grid-body')

    let firstClick = false
    let count = 9
    const positionsEquis = []
    const positionsCircle = []
    const winningPositions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    
    
    
    spaces.forEach((space, index) => {
        
        space.addEventListener('click', () => {
            count--

            if (spaces[0].innerHTML != "" && spaces[1].innerHTML != "" && spaces[2].innerHTML != "" && spaces[3].innerHTML != "" && spaces[4].innerHTML != "" && spaces[5].innerHTML != "" && spaces[6].innerHTML != "" && spaces[7].innerHTML != "" && spaces[8].innerHTML != "") {
                infoGame.textContent = `Empate - Juego Acabado`
                resetGame() 
            } else {
                
                if (!firstClick) { 

                    firstClick = true

                    infoGame.textContent = `Movimientos: ${count}`
                    actionWithEquis(space, index, positionsEquis, winningPositions)

                } else  {
                    firstClick = false

                    infoGame.textContent = `Movimientos: ${count}`
                    actionWithCircle(space, index, positionsCircle, winningPositions)
                } 
            
            } 

        })
        
    })
            
        
}


const actionWithEquis = (space, index, positionsEquis, winningPositions) => {
    const disableGame = document.querySelector('.grid-body')
    const infoGame = document.querySelector(".grid-header > h2")
    const spaces = document.querySelectorAll('.grid-game')

    positionsEquis.push(index)
    space.textContent = 'X'
    space.classList.toggle('grid-disabled')
    
    for (const winningTrio of winningPositions) {
        console.log(winningTrio.every(element => positionsEquis.includes(element)));
        if (!winningTrio.every(element => positionsEquis.includes(element)) && spaces[0].innerHTML != "" && spaces[1].innerHTML != "" && spaces[2].innerHTML != "" && spaces[3].innerHTML != "" && spaces[4].innerHTML != "" && spaces[5].innerHTML != "" && spaces[6].innerHTML != "" && spaces[7].innerHTML != "" && spaces[8].innerHTML != "") {
            infoGame.textContent = `Empate - Juego Acabado`
            resetGame()
        } else {
        if (winningTrio.every(element => positionsEquis.includes(element))) {
            infoGame.textContent = `X ha ganado`
            disableGame.classList.toggle('grid-disabled')
            resetGame()    
        }
        
    }
}
}


const actionWithCircle = (space, index, positionsCircle, winningPositions) => {
    const disableGame = document.querySelector('.grid-body')
    const infoGame = document.querySelector(".grid-header > h2")
    const spaces = document.querySelectorAll('.grid-game')

    positionsCircle.push(index)
    space.textContent = 'O'
    space.classList.toggle('grid-disabled')

    for (const winningTrio of winningPositions) {
        if (!winningTrio.every(element => positionsCircle.includes(element)) && spaces[0].innerHTML != "" && spaces[1].innerHTML != "" && spaces[2].innerHTML != "" && spaces[3].innerHTML != "" && spaces[4].innerHTML != "" && spaces[5].innerHTML != "" && spaces[6].innerHTML != "" && spaces[7].innerHTML != "" && spaces[8].innerHTML != "") {
            infoGame.textContent = `Empate - Juego Acabado`
            resetGame()
        } else {
            if (winningTrio.every(element => positionsCircle.includes(element))) {
                infoGame.textContent = `O ha ganado`
                disableGame.classList.toggle('grid-disabled')
                resetGame()    
            }
        }
    }
}


const resetGame = () => {
    const resetButton = document.querySelector('#reset-game')
    resetButton.removeAttribute('disabled')
    resetButton.addEventListener('click', () => {
        Tresenraya()
    })
}