import './Card.css'
import { MdFavorite, MdDeleteForever } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Card = ({ image, name, date, actionClick }) => {
    
        let location = useLocation()
        //console.log(location.pathname)
        
    
  return (
    <figure className='card' >
        <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={name} />
        <figcaption>
            <h3>{name}</h3>
            <h4>{date}</h4>
            {
               location.pathname === '/profile' ? <button className='btn-favorites' onClick={() => actionClick()}><MdDeleteForever /></button> : <button className='btn-favorites' onClick={() => actionClick()}><MdFavorite /></button>
            }

        </figcaption>
    </figure>

  )
}

export default Card