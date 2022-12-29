import "./Header.css";
import { Search } from "./Search";



export const Header = () => {

    
    const createHeader = document.querySelector('#header')
    //console.log(createHeader);
    
    createHeader.innerHTML = `
        <nav>
            <div id="search"></div>
            <button id="color-mode" class="btn">Color Mode</button>
        </nav>
    `
    actionBtnColor() 
    
}


const randomColor = () => {
    const valuesHex = '0123456789ABCDEF' 
    let colorCodeHex = "#"
    for (let code = 0; code < 6; code++) {

        //colorCodeHex = valuesHex[15]
        colorCodeHex += valuesHex[Math.floor(Math.random()*valuesHex.length)]
    }   
    return colorCodeHex
}



const actionBtnColor = () => {
    const btnColor = document.querySelector('#color-mode')
    console.log(btnColor);

    btnColor.addEventListener('click', () => {
        
        console.log(randomColor());
        document.body.style.backgroundColor = randomColor()
        //btnColor.textContent = randomColor()
    })
}

