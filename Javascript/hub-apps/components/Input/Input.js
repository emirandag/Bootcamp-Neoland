import './Input.css'

export const Input = (name) => {
    const newInput = `<input id="${name.toLowerCase()}-input" class="input" type="text" />`
    return newInput
}