import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { getMovies } from '../../services/movies';

const Movies = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     (async () => {
//       setMovies(await getMovies());
//     })();
//   }, []);

const [movies] = useOutletContext()



  return (
    <>
      <h1>Películas</h1>
      <div className="cards-container">
        {movies.results === undefined ? (
          <h1>Loading...</h1>
        ) : (
          movies.results.map((movie) => (
            <Card
              key={movie.id}
              image={movie.poster_path}
              name={movie.title}
              date={movie.release_date}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Movies;
