import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from '../../components/Card/Card';

const Movies = () => {

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
