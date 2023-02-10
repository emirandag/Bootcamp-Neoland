import './App.css'
import { useState } from 'react'
import Axios from 'axios'
import Card from './components/Card/Card'
import Button from './components/IU/Button/Button'
import Input from './components/IU/Input/Input'

function App() {
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonChosen, setPokemonChosen] = useState(false)
  const [pokemon, setPokemon] = useState({
    name: "",
    number: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    type: ""
  })

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (res) => {
        setPokemon({
          name: pokemonName,
          number: res.data.id,
          species: res.data.species.name,
          image: res.data.sprites.other.dream_world.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          type: res.data.types[0].type.name,
          ability: res.data.abilities.map(type => type.ability.name).join(", "),
          height: res.data.height,
          weight: res.data.weight
        })
        setPokemonChosen(true)
      }
    )
  }

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokédex</h1>
        <Input onChange={(e) => setPokemonName(e.target.value)} value={pokemonName.toLowerCase()} />
        <Button onClick={searchPokemon} value="Search Pokémon" />
      </div>
      <div className='DisplaySection'>
        {!pokemonChosen ? (
          <h1>Please choose a Pokémon</h1>
        ) : (
          <Card character={pokemon} />
        )}
      </div>
    </div>
  )
}

export default App
