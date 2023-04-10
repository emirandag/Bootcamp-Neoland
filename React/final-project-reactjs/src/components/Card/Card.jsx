import './Card.css'
import { MdFavorite, MdDeleteForever } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const Card = ({ id, image, name, date, actionClick}) => {
    
        const location = useLocation()
        const navigate = useNavigate();

        console.log(location.pathname);

        const handleCheckId = (id) => {
          //console.log(id);
          // if (location.pathname === '/movies') {
          //   navigate(`/movies/${id}`);
          // }
          navigate(`${location.pathname}/${id}`);
          // if (location.pathname === '/series') {
          //   navigate(`/series/${id}`);
          // }
          
        };

  return (
    <figure className='card' >
        <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={name} onClick={() => (handleCheckId(id))} />
        <figcaption>
            <h3>{name}</h3>
            <h4>{date?.replaceAll("-", "/")}</h4>
            {/* <h4>{date}</h4> */}
            {
               location.pathname === '/profile' ? <button className='btn-favorites'  onClick={() => actionClick()}><MdDeleteForever /></button> : <button className='btn-favorites' onClick={() => actionClick()}><MdFavorite /></button>
            }

        </figcaption>
    </figure>

  )
}

export default Card