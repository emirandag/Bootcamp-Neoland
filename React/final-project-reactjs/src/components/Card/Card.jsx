import './Card.css'

const Card = ({ image, name, date }) => {
  return (
    <figure className='card'>
        <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={name} />
        <figcaption>
            <h3>{name}</h3>
            <h4>{date}</h4>
        </figcaption>
    </figure>

  )
}

export default Card