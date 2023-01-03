import './Button.css' 

export const Button = (name) => {

    const newButton = `<button id="${name.toLowerCase()}-btn" class="btn">${name}</button>`
    return newButton
    
}
