
import './Article.css'

const Article = ({ item, characters }) => {

  return (
    <>
        {item === undefined ? <div className='loading'><h1>Loading...</h1></div> : (
            <>
            <article className='article' key={item.id}>
                <div className='article-left'>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                </div>
                <div className="article-right">
                    <h1>{item.title}</h1>
                    <p>{item.release_date.replaceAll("-", "/")} - {item.runtime} min</p>
                    <p>{
                        item.genres.map(genre => genre.name).join(", ")
                    }</p>
                    {/* <h3>{item.genre_ids}</h3> */}
                    <h3>Descripción general</h3>
                    <p>{item.overview}</p>
                </div>
            </article>
            <div className='characters-container'>
                    {characters.cast.map((character) => (
                        <figure key={character.id} className='characters-card'>
                            <img src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} alt={character.character} />
                            <figcaption>
                                <h4>{character.character}</h4>
                            </figcaption>
                        </figure>
                    ))}
            </div>
            </>
        )}
    </>

  )
}

export default Article