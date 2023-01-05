import './Button.css' 

export const Button = (id, value) => {

    const newButton = `<button id="${id}-btn" class="btn">${value}</button>`
    return newButton
    
}
