import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"
import Image from "../components/Image/Image"


export const FetchingInput = () => {

    const [filter, setFilter] = useState('ditto')

    const [debounceFilter] = useDebounce(filter, 500)

    const [pokemonCollection, setPokemonCollection] = useState([])    

    useEffect(() => {
        const getPokemonFiltered = async () => {
            const pokemonList = await fetch (`https://pokeapi.co/api/v2/pokemon/${filter}`)

            const pokemonListToJson = await pokemonList.json()

            console.log(pokemonListToJson.sprites.front_shiny);
            return {
                ...pokemonListToJson,
                name: pokemonListToJson.name,
                image: pokemonListToJson.sprites.front_shiny
            }
        }
        getPokemonFiltered().then((pokemon) => setPokemonCollection([pokemon]))
    }, [debounceFilter])

    return (
        <>
            <input value={filter} onChange={(e) => setFilter(e.target.value)} />

            <ul>
                {pokemonCollection.map((pokemon) => (
                    <li key={pokemon.name}>
                        <h1>{pokemon.name}</h1>
                        <Image url={pokemon.image} nombre={pokemon.name} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FetchingInput