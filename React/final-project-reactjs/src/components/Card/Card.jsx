import './Card.css'
import { MdFavorite } from "react-icons/md";

const Card = ({ image, name, date, actionClick }) => {
  return (
    <figure className='card' >
        <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={name} />
        <figcaption>
            <h3>{name}</h3>
            <h4>{date}</h4>
            <button onClick={() => actionClick()}><MdFavorite /></button>
        </figcaption>
    </figure>

  )
}

export default Card