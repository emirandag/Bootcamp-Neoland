import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { getSeries } from '../../services/series';

const Series = () => {

const [movies, series, page, nextPage, previousPage ] = useOutletContext()

console.log(series);
  return (
    <>
      <h1>Series</h1>
      <div className="cards-container">
        {series.results === undefined ? (
          <h1>Loading...</h1>
        ) : (
          series.results.map((serie) => (
            <Card
              key={serie.id}
              image={serie.poster_path}
              name={serie.name}
              date={serie.first_air_date}
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

export default Series;
