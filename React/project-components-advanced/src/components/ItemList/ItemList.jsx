import './ItemList.css'
//import { Paragraph, Image } from '../../components'
import Paragraph from '../Paragraph/Paragraph'
import Image from '../Image/Image'

const ItemList = ({ character }) => {
    return (
        <>
            <li>
                <Paragraph text={character.name}/>
                <Image url={character.image} nombre={character.name} ancho="200px" alto="200px"/>
                <Paragraph text={character.status} />
                <Paragraph text={character.origin.name} />
            </li>
        </>
        
    )
}

export default ItemList