import { Search } from '../components/Search'
import './Pokeapi.css'


export const Pokeapi = async () => {
    const getPokemons = document.querySelector('#container')
    getPokemons.innerHTML = ""
    getPokemons.innerHTML = "Please wait..."
    const getPokeapi = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150')
    const result = await getPokeapi.json()
    //console.log(result.results);
    listAllPokemons(result.results)
    //printNamePokemon(result.results);
}


const listAllPokemons = async(pokemons) => {


    let allPokemons = []
    for (const pokemon of pokemons) {

        const dataPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const dataPokemonJson = await dataPokemon.json()
        allPokemons.push(dataPokemonJson)
        
    }

    //console.log(allPokemons);
    const mappedAllPokemons = allPokemons.map(pokemon => {
        const pokemonTypes = pokemon.types.map(type => type.type.name)
        //console.log(pokemonTypes);
        const otropokemon = {
            id: pokemon.id,
            name : pokemon.name,
            type: pokemonTypes[0],
            image: pokemon.sprites.front_default
        }
        
        return otropokemon
    })

    //console.log(mappedAllPokemons);
    
    showPokemons(mappedAllPokemons)


}

const showPokemons = (pokemons) => {
    const newPokemons = pokemons
    printPokemons(newPokemons)
}

const printPokemons = (pokemons) => {
    
    //console.log(pokemons);

    // for (const pokemon of pokemons) {
    //     //console.log(pokemon);
    // }
    const getPokemons = document.querySelector('#container')
    Search()

    getPokemons.innerHTML = ""

    for (const pokemon of pokemons) {
        getPokemons.innerHTML += `
        <div class="card-pokemon">
            <div class="card-top">
                <h5>${pokemon.id}</h5>
                <img src="images/icons-types/${pokemon.type}.png" alt=${pokemon.type} />
            </div>
            <div class="card-center">
                <h4>${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h4>
                <img src=${pokemon.image} />
            </div>
            <div class="card-bottom">
            </div>
        </div>           
    `
    }

    listenerPokemon(pokemons)
} 


/*
const printNamePokemon = async (pokemons) => {
    //const getPokemons = 
    const getPokemons = document.querySelector('#container')
    Search()
    //getPokemons.innerHTML = "Please wait..."
    getPokemons.innerHTML = ""

    //const newArrayPokemon

    //console.log(pokemons);
    
    for (const pokemon of pokemons) {
        //console.log(pokemon.name[0]);
        //console.log(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const dataPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const dataPokemonJson = await dataPokemon.json()
        //console.log(dataPokemonJson);
        // for (const type of dataPokemonJson.types) {
        //     console.log(type.type.name);
        // }

        
        //console.log(dataPokemonJson.name);

        const pokemonTypes = dataPokemonJson.types.map(type => type.type.name)

        const allPokemons = {
            id: dataPokemonJson.id,
            name: pokemon.name,
            type: pokemonTypes[0],
            image: dataPokemonJson.sprites.front_default
        }

        //console.log(allPokemons);
        // const allPokemons = dataPokemonJson.map((pokemon) => {
        //     pokemon = {
        //         id: dataPokemonJson.id,
        //         name: pokemon.name,
        //         type: pokemonTypes,

        //     } 
        //     return pokemon
        // })
        // console.log(allPokemons);
        // getPokemons.innerHTML += `
        //     <div class="card-pokemon">
        //         <div class="card-top">
        //             <h5>${dataPokemonJson.id}</h5>
        //             <img src="images/icons-types/${pokemonTypes[0]}.png" alt=${pokemonTypes[0]} />
        //         </div>
        //         <div class="card-center">
        //             <h4>${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h4>
        //             <img src=${dataPokemonJson.sprites.front_default} />
        //         </div>
        //         <div class="card-bottom">
        //         </div>
        //     </div>           
        // `
        getPokemons.innerHTML += `
        <div class="card-pokemon">
            <div class="card-top">
                <h5>${allPokemons.id}</h5>
                <img src="images/icons-types/${allPokemons.type}.png" alt=${allPokemons.type} />
            </div>
            <div class="card-center">
                <h4>${allPokemons.name.charAt(0).toUpperCase()+allPokemons.name.slice(1)}</h4>
                <img src=${allPokemons.image} />
            </div>
            <div class="card-bottom">
            </div>
        </div>           
    `
       
    }
    
    listenerPokemon()
    
}

*/






const listenerPokemon = (pokemons) => {

    const getNamePokemon = document.querySelector('#input-find-pokemon')
    const getBtnPokemon = document.querySelector('#btn-find-pokemon')

    getNamePokemon.addEventListener('input', () => {
        //console.log(getNamePokemon.value);
        const namePokemon = getNamePokemon.value.toLowerCase()
        findPokemon(namePokemon, pokemons)
    })

//     getBtnPokemon.addEventListener('click', () => {
//         //console.log(getNamePokemon.value)
//         const namePokemon = getNamePokemon.value.toLowerCase()
//         findPokemonLocal(namePokemon)
//     })
}


const findPokemon = (name, pokemons) => {
    //console.log(pokemons);
    //console.log(name);
    const getCharacter = document.querySelector('#container')
    getCharacter.innerHTML = ""
    for (const element of pokemons) {
        
        //console.log(element.name.includes("p"))
        //
            if (element.name.includes(name) || element.type.includes(name)) {
                

                getCharacter.innerHTML += `
                <div class="card-pokemon">
                <div class="card-top">
                    <h5>${element.id}</h5>
                    <img src="images/icons-types/${element.type}.png" alt=${element.type} />
                </div>
                <div class="card-center">
                    <h4>${element.name.charAt(0).toUpperCase()+element.name.slice(1)}</h4>
                    <img src=${element.image} />
                </div>
                <div class="card-bottom">
                </div>
            </div>           
        `
            } 
    }
    
}

// const findPokemon = async (namePokemon) => {
    
//     const getFoundPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
//     const getFoundPokemonJson = await getFoundPokemon.json()
//     console.log(getFoundPokemonJson);
//     printCharacter(getFoundPokemonJson)
// }

// const printCharacter = (character) => {
//     const getCharacter = document.querySelector('#container')

//     console.log(character);

//     getCharacter.innerHTML = ""

//     const energyType = character.types.map(type => type.type.name)
//     getCharacter.innerHTML = `
//     <div class="card-pokemon">
//         <div class="card-top">
//             <h5>${character.id}</h5>
//             <img src="images/icons-types/${energyType[0]}.png" alt=${energyType[0]} />
//         </div>
//         <div class="card-center">
//             <h4>${character.name.charAt(0).toUpperCase()+character.name.slice(1)}</h4>
//             <img src=${character.sprites.front_default} />
//         </div>
//         <div class="card-bottom">
//         </div>
//     </div>  
//     `
// }


const findTypePokemon = () => {

}


