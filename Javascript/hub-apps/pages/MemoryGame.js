import './MemoryGame.css'

export const MemoryGame = () => {
    const container =  document.querySelector('#container')

    container.innerHTML = `
        <div class="card-header">
            
        </div>
        <div class="card-box">
            <div class="card fire">
                <div class="card-face">
                    <img src="images/icons-types/fire.png" width="200" height="250px" />
                </div>
                <div class="card-rear">
                    <img src="images/games/patron.jpg" width="200" height="250px" />
                </div>
            </div>
            <div class="card fire">
                <div class="card-face">
                    <img src="images/icons-types/fire.png" width="200" height="250px" />
                </div>
                <div class="card-rear">
                    <img src="images/games/patron.jpg" width="200" height="250px" />
                </div>
            </div>
            <div class="card bug">
                <div class="card-face">
                    <img src="images/icons-types/bug.png" alt="bug" width="200" height="250px" />
                </div>
                <div class="card-rear">
                    <img class="bug" src="images/games/patron.jpg" width="200" height="250px" />
                </div>
            </div>
            <div class="card bug">
                <div class="card-face bug">
                    <img src="images/icons-types/bug.png" alt="bug" width="200" height="250px" />
                </div>
                <div class="card-rear">
                    <img class="bug" src="images/games/patron.jpg" alt="bug" width="200" height="250px" />
                </div>
            </div>
        </div>

    `
    actionCard()
}


const actionCard = () => {
    
    const cartas = document.querySelectorAll('.card')

    let agregaValores = []

    cartas.forEach((carta, index) => {
        carta.addEventListener('click', (event) => {

            console.log("Se ha mostrado la cara");
            carta.style.transform = "rotateY(-180deg)"
            //transform: rotateY(-180deg);
            //console.log(cartas[0]);

            
            //comparar(carta.className)
            console.log(agregaValores);
            //console.log(cartas[0].className);
            //console.log(this);
            // console.log(event.target.className)
            // const valor = event.target.className
            // console.log(valor);
            
            if (agregaValores.length < 2) {
                agregaValores.push(carta.className)
                console.log(agregaValores);
                
                
                
                //console.log(agregaValores);
                
                
            } 

            comparar(agregaValores, carta)
            
        })

        


    });

    //console.log(valorCarta);
    
    
}


const comparar = (valores, carta) => {
    if (valores[0] === valores[1]) {
        console.log("Son iguales");
        
    } else {
        console.log("No son iguales");
        
    }
    //valores = []
}