import './ListDetailPokemon.css'
import { useEffect, useState } from "react";
import Card from "../Card/Card";


const ListDetailPokemon = () => {
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
  useEffect(() => {
    
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
      .then((res) => res.json())
      .then((data) => setResult(
        data.results.map((item) => {
          fetch(item.url)
            .then((res) => res.json())
            .then((poke) => list.push(poke))
            setPokemon(list)
        })
      ))

    
}, []);


setTimeout(() => {
    setLoad(false);
    }, 3000);
    
  return (
    <div>
        <h2>Pokeapi</h2>
      {/*<button onClick={getPokemons}>Mostrar</button>*/}
      <div className='container'>
        {
          load ? (
            <p>Loading...</p>
            ) : (
          pokemon.map(item => (
            <Card character={item} />
          ))
            )
        }
      </div>
    </div>
  )
}

export default ListDetailPokemon