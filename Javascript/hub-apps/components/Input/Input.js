import './Input.css'

export const Input = (id, value) => {
    const newInput = `<input id="${id}-input" class="input" type="text" placeholder="${value}" />`
    return newInput
}