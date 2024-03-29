
const UsePokemonCollection = () => {
    const [filter, setFilter] = useState('ditto')

    const [pokemonCollection, setPokemonCollection] = useState([])

    const loadPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${filter}`)
        .then((res) => res.json())
        .then((json) => setPokemonCollection([json]))
    }
  return { filter, setFilter, pokemonCollection, loadPokemon }
}

export default UsePokemonCollection