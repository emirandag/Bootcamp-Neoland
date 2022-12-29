import './Tresenraya.css'

export const Tresenraya = () => {
    const container =  document.querySelector('#container')

    container.innerHTML = `
        <div class="grid-header">
            <h2>Movimientos: 0</h2>
            <button id="reset-game" class="btn" disabled>Reiniciar</button>
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

    `

    listenerRaya()
    
}


const listenerRaya = () => {
    const spaces = document.querySelectorAll('.grid-game')
    const infoGame = document.querySelector(".grid-header > h2")
    const disableGame = document.querySelector('.grid-body')
    //console.log(infoGame);
    let firstClick = false
    let count = 0
    const arrayEquis = []
    const arrayCircle = []

    const winningPositions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    spaces.forEach((space, index) => {
        space.addEventListener('click', (event) => {
            count++

            if (!firstClick && event.target.id === "") {        

                firstClick = true;
                space.innerHTML = `<img id="equis" src="images/games/equis.png" />`
  
                arrayEquis.push(index)

                if (count === 9) {
                    infoGame.textContent = `Empate - Juego Acabado`
                    disableGame.style.pointerEvents = 'none'
                    resetGame()
                } else {
                    infoGame.textContent = `Movimientos: ${count}`      

                    for (const winningTrio of winningPositions) {

                    if (winningTrio.every(element => arrayEquis.includes(element))) {
                        
                        disableGame.style.pointerEvents = 'none'
                        resetGame()

                        infoGame.textContent = `X ha ganado`
                        console.log("X ha ganado");
                    }
                }

                }
                

            } else if (firstClick && event.target.id === "") {
                

                firstClick = false;
                space.innerHTML = `<img id="circle" src="images/games/circle.png" />`

                arrayCircle.push(index)
                
                if (count === 9) {
                    infoGame.textContent = `Empate - Juego Acabado`
                    disableGame.style.pointerEvents = 'none'
                    resetGame()

                    
                } else {
                    infoGame.textContent = `Movimientos: ${count}`      

                    for (const winningTrio of winningPositions) {

                        if (winningTrio.every(element => arrayCircle.includes(element))) {
                            
                            disableGame.style.pointerEvents = 'none'
                            resetGame()
                        
                            infoGame.textContent = `O ha ganado`
                            console.log("X ha ganado");
                        }
                    }

                }
            } 


            
        })
    });
        
        


}


const resetGame = () => {
    const resetButton = document.querySelector('#reset-game')
    resetButton.removeAttribute('disabled')
    resetButton.addEventListener('click', (event) => {
        Tresenraya()
    })
    //return resetButton
}