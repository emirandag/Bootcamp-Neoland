
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from '../../components/Card/Card';

const Movies = () => {
  const [movies, series, page, nextPage, previousPage] = useOutletContext();
  //const [addFavoritesUser, setAddFavoritesUser] = useState([])

  const user = localStorage.getItem('user');

  //const [search, setSearch] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([])

  const handleClick = (id, title, poster, date) => {
    const favorites = JSON.parse(localStorage.getItem(`${user}-Favorites`));

    const newFavorite = { id: id, title: title, poster, date };

    if (!favorites.some((favorite) => favorite.id === newFavorite.id)) {
      const addFavorite = [...favorites, newFavorite];
      !favorites
        ? localStorage.setItem(`${user}-Favorites`, JSON.stringify(newFavorite))
        : localStorage.setItem(`${user}-Favorites`, JSON.stringify(addFavorite));
    }

    //localStorage.setItem(`${user}-Favorites`, JSON.stringify(addFavoritesUser))
  };


  const handleSearch = (value) => {
    console.log(value);
    //setSearch(value)
    const filteredMovies = movies.results.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase()))
    console.log(filteredMovies);

    setFilteredMovies(filteredMovies)

  }

  // useEffect(() => {
  //     localStorage.setItem(`${user}-Favorites`, JSON.stringify(addFavoritesUser))
  // }, [addFavoritesUser])

  return (
    <>
            {console.log(filteredMovies)}
      <h1>Películas</h1>
      
      <input className='search' onChange={(e) => handleSearch(e.target.value)}/>
      {/* <button>Buscar</button> */}
   
      
      <div className="cards-container">
        {movies.results === undefined ? (
          <h1>Loading...</h1>
        ) : ( 

        filteredMovies.length > 0 ? filteredMovies.map((movie) => (
                <Card
                  key={movie.id}
                  image={movie.poster_path}
                  name={movie.title}
                  date={movie.release_date}
                  actionClick={() =>
                    handleClick(movie.id, movie.title, movie.poster_path, movie.release_date)
                  }
                />
              ))
            
            : (
                movies.results.map((movie) => (
                    <Card
                      key={movie.id}
                      image={movie.poster_path}
                      name={movie.title}
                      date={movie.release_date}
                      actionClick={() =>
                        handleClick(movie.id, movie.title, movie.poster_path, movie.release_date)
                      }
                    />
                  ))
            )
                  
        )}
      </div>
      <div className="btn-pages">
        {page !== 1 && <button onClick={previousPage}>Anterior</button>}
        {page !== movies.total_pages && <button onClick={nextPage}>Siguiente</button>}
      </div>
    </>
  );
};

export default Movies;
