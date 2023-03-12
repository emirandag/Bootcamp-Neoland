import React from 'react'

const Article = ({ articles }) => {


  return (
    <article>
       {articles.map((data) => (       
        
        data.topic === 'sports' && (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <figure>
              <img src={data.image_url} alt={data.title}/>
              <figcaption>
                <h4>{data.author}</h4>
                <p>{data.published_date}</p>
              </figcaption>
            </figure>
            <article>
              {data.summary.map((item) => (
                <p key={item.info}>{item.info}</p>
              ))}
            </article>
          </div>
          
        )
))}
    </article>
  )
}

export default Article