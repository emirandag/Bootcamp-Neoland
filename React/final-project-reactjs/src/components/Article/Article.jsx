
import CharactersCard from '../CharactersCard/CharactersCard'
import './Article.css'

const Article = ({ item, characters, type}) => {

  return (
    <>
        {item === undefined ? <div className='loading'><h1>Loading...</h1></div> : (

        
            
            type === 'movie' ? (
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
                        <CharactersCard characters={characters} />
                    </>
            ) : (
                <>
                <article className='article' key={item.id}>
                <div className='article-left'>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                </div>
                <div className="article-right">
                    <h1>{item.name}</h1>
                    <p>{item.first_air_date.replaceAll("-", "/")} - {item.runtime} min</p>
                    <p>{
                        item.genres.map(genre => genre.name).join(", ")
                    }</p>
                    {/* <h3>{item.genre_ids}</h3> */}
                    <h3>Descripción general</h3>
                    <p>{item.overview}</p>
                </div>
            </article>
            <CharactersCard characters={characters} />
        </>
            )

            
            
        )}
    </>

  )
}

export default Article