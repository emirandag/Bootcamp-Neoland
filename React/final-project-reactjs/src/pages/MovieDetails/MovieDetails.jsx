import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Article from '../../components/Article/Article';
import useRequest from '../../hooks/useRequest';

const MovieDetails = () => {

    const { id } = useParams()

    const [movies] = useOutletContext() 



    const filteredMovies = movies.results?.find((movie) => movie.id === parseInt(id))
    //const filteredMovies = movies.results.filter((movie) => console.log('De array:' + typeof movie.id))

    const { moviesId, moviesCharacters } = useRequest(filteredMovies?.id)
    console.log('pelicula: '+moviesId);
    console.log('personajes: '+moviesCharacters);

  
  return (
    <>
       {moviesId === undefined && filteredMovies === undefined ? <div className='loading'><h1>Loading...</h1></div> : ( 
            <Article item={moviesId} characters={moviesCharacters} />
        )}
    </>
    
  )
};

export default MovieDetails;
