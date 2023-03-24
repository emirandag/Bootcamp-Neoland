import { Link } from 'react-router-dom';
import './Article.css'
const Article = ({ article }) => {

  return (
    <>
    {article === undefined ? <div className='loading'><h1>Loading...</h1></div> : (
      <div className='article'>
      
        {article.topic === 'sports' && (
          <h1>Deportes</h1>
        )}
        {article.topic === 'economy' && (
          <h1>Economía</h1>
        )}
        {article.topic === 'technology' && (
          <h1>Tecnología</h1>
        )}
      
      <article className="articles" key={article.id}>
        <h2>{article.title}</h2>
        <figure>
          <img src={article.image_url} alt={article.title} />
          <figcaption>
            <h4>{article.author}</h4>
            <p>{article.published_date.replaceAll('-','/')}</p>
          </figcaption>
        </figure>
        <section>
          {article.summary.map((item) => (
            <p key={item.info}>{item.info}</p>
          ))}
          <p>
            <strong>Fuente: </strong>
            {article.font_url}
          </p>
          <p>
            <Link to={article.link} target="_blank">
              LEER LA NOTICIA COMPLETA
            </Link>
          </p>
        </section>
      </article>
      </div>

    )}
    </>
  );
}

export default Article