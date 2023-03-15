import { Link } from 'react-router-dom';
import './Article.css'
const Article = ({ article }) => {


  return (
    <>
    <article className="articles" key={article.id}>
              <h2>{article.title}</h2>
              <figure>
                <img src={article.image_url} alt={article.title} />
                <figcaption>
                  <h4>{article.author}</h4>
                  <p>{article.published_date}</p>
                </figcaption>
              </figure>
              <section>
                {article.summary.map((item) => (
                  <p key={item.info}>{item.info}</p>
                ))}
                <p><strong>Fuente: </strong>{article.font_url}</p>
                <p><Link to={article.link} target='_blank'>Leer la noticia completa ...</Link></p>
              </section>
            </article>
      {/* {articles.map(
        (data) =>
          data.topic === 'sports' && (
            <article className="articles" key={data.id}>
              <h2>{data.title}</h2>
              <figure>
                <img src={data.image_url} alt={data.title} />
                <figcaption>
                  <h4>{data.author}</h4>
                  <p>{data.published_date}</p>
                </figcaption>
              </figure>
              <section>
                {data.summary.map((item) => (
                  <p key={item.info}>{item.info}</p>
                ))}
                <p><strong>Fuente: </strong>{data.link}</p>
                <p><Link to={data.link} target='_blank'>Leer la noticia completa ...</Link></p>
              </section>
            </article>
          ),
      )} */}
    </>
  );
}

export default Article