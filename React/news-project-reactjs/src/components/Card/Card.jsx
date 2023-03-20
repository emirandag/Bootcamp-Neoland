import { useNavigate } from 'react-router-dom';
import './Card.css'

const Card = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = (id, topic) => {
    console.log(id);
    navigate(`/news/${topic}/${id}`);
  };

  return (
    <div className="card">
      <figure onClick={() => handleClick(article.id, article.topic)}>
        <img src={article.image_url} alt={article.title} />
        <figcaption>
          <h2>{article.title}</h2>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card