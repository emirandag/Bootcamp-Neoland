import { useNavigate } from 'react-router-dom';
import './Card.css'

const Card = ({ article }) => {

    const navigate = useNavigate()

  const handleClick = (id) => {
    console.log(id);
    navigate(`/news/sports/${id}`)
  }


  return (
    <div className='card'>
        <figure onClick={() => handleClick(article.id)}>
          <img src={article.image_url} alt={article.title} />
          <figcaption>
            <h2>{article.title}</h2>
          </figcaption>
        </figure>
    </div>
  )
}

export default Card