import './CharacterList.css'
import { useState, useEffect } from 'react'
//import { ItemList } from '../../components'
import ItemList from '../ItemList/ItemList'

const CharacterList = () => {
    const [characterList, setCharacterList] = useState([])

    useEffect(() => {
        (async () => {
            let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
                (res) => res.json()
            )

            setCharacterList(data.results)
        })()
    }, [])

    return (
        <ul className='character-list'>
            {characterList.map((character) => (
            <ItemList key={character.id} character={character} />
            ))}
        </ul>
    )
}

export default CharacterList