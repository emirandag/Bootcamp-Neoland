import './App.css'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import ListDetailPokemon from './components/ListDetailPokemon/ListDetailPokemon'

function App() {

  const [result, setResult] = useState([])
  const [pokemon, setPokemon] = useState([])
  const [load, setLoad] = useState('true');

  const list = []

  // const listAllPokemons = () => {
    
  //   for (let index = 1; index < 10; index++) {
  //     let data = Axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`).then(
  //       (res) => res
  //       //console.log(res.data.name)
  //     )
  //     setResult(data)
  //   }
    
  // }
//   useEffect(() => {
    
//     fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
//       .then((res) => res.json())
//       .then((data) => setResult(
//         data.results.map((item) => {
//           fetch(item.url)
//             .then((res) => res.json())
//             .then((poke) => list.push(poke))
//             setPokemon(list)
//         })
//       ))

    
// }, []);
/*
 useEffect(() => {
    
      Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
        .then(
          (res) => setResult(res.data.results)
        )
      
  }, []);
*/
/*
  const getPokemon = (name) => {
    console.log(name);
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(
      (res) => setPokemon({
        name: res.data.name,
        id: res.data.id
      })
    )
  }
*/

  return (
    <div className="App">
      <ListDetailPokemon />
    </div>
  )
}

export default App
