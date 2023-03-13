import './Article.css'
const Article = ({ articles }) => {


  return (
    <>
      {articles.map(
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
              </section>
            </article>
          ),
      )}
    </>
  );
}

export default Article