

export const Search = () => {
    const getSearch = document.querySelector('#search')

    getSearch.innerHTML += `
        <input id="input-find-pokemon" />
        <button id="btn-find-pokemon">Search pokemon</button>
    `
    createSearch()
}


const createSearch = () => {
    const getNamePokemon = document.querySelector('#input-find-pokemon')
    
    const getBtnPokemon = document.querySelector('#btn-find-pokemon')
    console.log(getBtnPokemon);
    getBtnPokemon.addEventListener('click', () => {
        console.log(getNamePokemon.value)
    })
}