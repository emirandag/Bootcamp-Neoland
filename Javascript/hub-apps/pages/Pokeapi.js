
import { Button } from '../components/Button/Button'
import { Input } from '../components/Input/Input'
import './Pokeapi.css'


export const Pokeapi = async () => {
    const getPokemons = document.querySelector('#container')
    getPokemons.innerHTML = ""
    getPokemons.innerHTML = "Please wait..."
    const getPokeapi = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150')
    const result = await getPokeapi.json()

    listAllPokemons(result.results)

}


const listAllPokemons = async(pokemons) => {

    let allPokemons = []
    for (const pokemon of pokemons) {

        const dataPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const dataPokemonJson = await dataPokemon.json()
        allPokemons.push(dataPokemonJson)    
    }

    const mappedAllPokemons = allPokemons.map(pokemon => {
        const pokemonTypes = pokemon.types.map(type => type.type.name)
        const pokemonAbilites = pokemon.abilities.map(type => type.ability.name)
        console.log(pokemon.sprites.other["official-artwork"]);
        const otropokemon = {
            id: pokemon.id,
            name : pokemon.name,
            type: pokemonTypes,
            image: pokemon.sprites.other["official-artwork"].front_default,
            imageBig: pokemon.sprites.other.dream_world.front_default,
            height: pokemon.height,
            weight: pokemon.weight,
            base_experience: pokemon.base_experience,
            abilities: pokemonAbilites
        }
        
        return otropokemon
    })
    
    showPokemons(mappedAllPokemons)


}

const showPokemons = (pokemons) => {
    const newPokemons = pokemons
    printPokemons(newPokemons)
}

const printPokemons = (pokemons) => {

    const getPokemons = document.querySelector('#container')

    getPokemons.innerHTML = ""
    getPokemons.innerHTML = `
    <div id="pokedex">
        <div class="card-header">
            <div class="card-header-data">
            <h2>Buscar pokemón</h2>
            ${Input("find-pokemon", "Escribe el nombre o tipo")}
            </div>
            <div class="card-header-data">
            <h2>Buscar por tipo</h2>
            <select id="find-pokemon-type">
                <option value="bug">Bug</option>
                <option value="dark">Dark</option>
                <option value="dragon">Dragon</option>
                <option value="electric">Electric</option>
                <option value="fairy">Fairy</option>
                <option value="fighting">Fighting</option>
                <option value="fire">Fire</option>
                <option value="flying">Flying</option>
                <option value="ghost">Ghost</option>
                <option value="grass">Grass</option>
                <option value="ground">Ground</option>
                <option value="ice">Ice</option>
                <option value="normal">Normal</option>
                <option value="poison">Poison</option>
                <option value="psychic">Psychic</option>
                <option value="rock">Rock</option>
                <option value="steel">Steel</option>
                <option value="water">Water</option>
            </select>
            
            </div>
        </div>
        <div id='pokemon-body' class='card-body'>
        
        </div>
    </div>
    `
    
    for (const pokemon of pokemons) {
        pokemonCard(pokemon)
    }

    
    pokemonShow(pokemons)
    listenerPokemon(pokemons)
} 



const listenerPokemon = (pokemons) => {

    const getNamePokemon = document.querySelector('#find-pokemon-input')
    const getBtnPokemonType = document.querySelector('#find-pokemon-type')

    getNamePokemon.addEventListener('input', () => {
        const namePokemon = getNamePokemon.value.toLowerCase()
        findPokemon(namePokemon, pokemons)
    })


    getBtnPokemonType.addEventListener('click', () => {
        findTypePokemon(getBtnPokemonType.value, pokemons)
    })
    
}


const findPokemon = (name, pokemons) => {

    document.querySelector('#pokemon-body').innerHTML = ""
    
    for (const pokemon of pokemons) {
        
            if (pokemon.name.includes(name) || pokemon.type.includes(name)) {
                
                pokemonCard(pokemon)
                
            } 
    }
    pokemonShow(pokemons)
    
}


const findTypePokemon = (type, pokemons) => {

    document.querySelector('#pokemon-body').innerHTML = ""

    for (const pokemon of pokemons) {

        if (pokemon.type.includes(type)) {

            pokemonCard(pokemon)
        }
    }

    pokemonShow(pokemons)
}


const pokemonCard = (pokemon) => {
    const getCharacter = document.querySelector('#pokemon-body')

    getCharacter.innerHTML += `
    <div id="${pokemon.id}" class="card-pokemon ${pokemon.type[0]}">
        <div class="card-top">
            <h5>${pokemon.id}</h5>
            <div class="card-types">
            ${pokemon.type.length > 1 ? `<img src="images/icons-types/${pokemon.type[0]}.png" alt=${pokemon.type[0]} /><img src="images/icons-types/${pokemon.type[1]}.png" alt=${pokemon.type[1]} />` : `<img src="images/icons-types/${pokemon.type[0]}.png" alt=${pokemon.type[0]} />`}
            </div>
            </div>
        <div class="card-center">
            <h4>${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h4>
            <img src=${pokemon.image} alt="${pokemon.name}" />
        </div>
        <div class="card-bottom">
        </div>
    </div>        
`
}

const pokemonShow = (pokemons) => {
    const valores = document.querySelectorAll('.card-pokemon')


    for (const valor of valores) {
        valor.addEventListener('click', (ev) =>{
            console.log(valor.id);
            pokemons.map(pokemon => {
                
                if (pokemon.id.toString() === valor.id) {
                    console.log(pokemon.name);
                    modalPokemon(pokemon)
                    //return pokemon
                }
            })
            
        })
        
    
    }
}

const modalPokemon = (pokemon) => {
    const getCharacter = document.querySelector('#container')

    getCharacter.innerHTML = ""
    getCharacter.innerHTML = `
        <div id="myModal" class="modal"> 
            <div class="modal-button"> 
                <button id="close-modal-btn">✖</button> 
            </div>
            <div class="modal-content">
                
                <div class="modal-left">
                    <div class="modal-header">

                    </div>
                    <div class="modal-body">
                        <img src=${pokemon.imageBig} />
                        <h2>${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2>
                    </div>
                    <div class="modal-footer">

                    </div>
                </div>
                <div class="modal-right">
                    <div class="modal-header">

                    </div>
                    <div class="modal-body">
                        <p><strong>ID:</strong> ${pokemon.id}</p>
                        <p><strong>Type:</strong> ${pokemon.type.join(", ")}</p>
                        <p><strong>Height:</strong> ${pokemon.height}</p>
                        <p><strong>Weight:</strong> ${pokemon.weight}</p>
                        <p><strong>Base Experience:</strong> ${pokemon.base_experience}</p>
                        <p><strong>Abilities:</strong> ${pokemon.abilities.join(", ")}</p>
                    </div>
                    <div class="modal-footer">

                    </div>
                </div>  
            </div>
        </div>   
    `

    const closeModal = document.querySelector('#close-modal-btn')
    closeModal.addEventListener('click', () => {
        Pokeapi()
    })
}
