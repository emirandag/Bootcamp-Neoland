import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from '../../components/Card/Card';
import ButtonStyle from '../../components/UI/ButtonStyle/ButtonStyle';
import { ThemeContext } from '../../context/ThemeProvider';

const Movies = () => {
  const { theme } = useContext(ThemeContext);
  const [movies, , page, nextPage, previousPage] = useOutletContext();
  //const [addFavoritesUser, setAddFavoritesUser] = useState([])

  const user = localStorage.getItem('user');

  //const [search, setSearch] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [noResultFiltered, setNoResultFiltered] = useState(false); //Estado para comprobar la longitud cuando se realice la búsqueda del filtro

  const handleClick = (id, title, poster, date) => {
  
    const favorites = JSON.parse(localStorage.getItem(`${user}-Favorites`));


    const newFavorite =  { id: id, title: title, poster, date, type: 'movie'};
    

    if (!favorites.some((favorite) => favorite.id === newFavorite.id)) {
      const addFavorite = [...favorites, newFavorite];
      !favorites
        ? localStorage.setItem(`${user}-Favorites`, JSON.stringify(newFavorite))
        : localStorage.setItem(`${user}-Favorites`, JSON.stringify(addFavorite));
    }
     
    
  };

  const handleSearch = (value) => {

    const filteredMovies = movies.results.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredMovies(filteredMovies);
    setNoResultFiltered(filteredMovies.length === 0);
  };



  return (
    <>
      <h1>Películas</h1>

      <input className="search" onChange={(e) => handleSearch(e.target.value)} />

      <div className="cards-container">
        {     
        movies.results === undefined ? (
          <h1>Loading...</h1>
        ) : noResultFiltered ? (
            <h2>No hay criterios de búsqueda</h2>
        ) : filteredMovies.length > 0 && filteredMovies.length < movies.results.length ? (
          filteredMovies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              name={movie.title}
              date={movie.release_date}
              actionClick={() =>
                handleClick(movie.id, movie.title, movie.poster_path, movie.release_date)
              }
            />
          ))
        ) : (
          movies.results.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              name={movie.title}
              date={movie.release_date}
              actionClick={() =>
                handleClick(movie.id, movie.title, movie.poster_path, movie.release_date)
              }
            />
          ))
        )}
      </div>
      {(!filteredMovies.length > 0 || filteredMovies.length === 20) && (
        <div className="btn-pages">
        {page !== 1 ? <ButtonStyle variant='primary' theme={theme} onClick={previousPage}>{`<`}</ButtonStyle> : <ButtonStyle disabled={true} variant='primary' theme={theme} onClick={previousPage}>{`<`}</ButtonStyle>}  
        <span>{(page-1) !== 0 && page-1}</span>
        <span className='actualPage'>{page}</span>
        <span>{page+1}</span>
        {page !== movies.total_pages && <ButtonStyle variant='primary' theme={theme} onClick={nextPage}>{`>`}</ButtonStyle>}
      </div>
      )}
      {/* <div className="btn-pages">
        {page !== 1 && <ButtonStyle variant='primary' theme={theme} onClick={previousPage}>Anterior</ButtonStyle>}
        {page !== movies.total_pages && <ButtonStyle variant='primary' theme={theme} onClick={nextPage}>Siguiente</ButtonStyle>}
      </div> */}
      
    </>
  );
};

export default Movies;
