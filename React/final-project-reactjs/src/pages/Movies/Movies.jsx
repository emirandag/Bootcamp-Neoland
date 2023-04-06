
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from '../../components/Card/Card';


const Movies = () => {

const [movies, series, page, nextPage, previousPage ] = useOutletContext()
const [addUser, setAddUser] = useState({})



    const handleClick = (id) => {

    
        setAddUser({id:id})
    
        console.log(addUser);
    
}




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
              actionClick={() => handleClick(movie.id)}
            />
          ))
        )}
      </div>
      <div className='btn-pages'>
   

      {
        page !== 1 && (<button onClick={previousPage}>Anterior</button>)
      }
    {
        page !== movies.total_pages && (<button onClick={nextPage}>Siguiente</button>)
    }
    


      </div>
    </>
  );
};

export default Movies;
