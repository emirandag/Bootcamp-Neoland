import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from '../../components/Card/Card';
import ButtonStyle from '../../components/UI/ButtonStyle/ButtonStyle';
import { ThemeContext } from '../../context/ThemeProvider';

const Series = () => {

  const { theme } = useContext(ThemeContext);
  const [, series, page, nextPage, previousPage] = useOutletContext();

  const user = localStorage.getItem('user');

  const [filteredSeries, setFilteredSeries] = useState([]);
  const [noResultFiltered, setNoResultFiltered] = useState(false); //Estado para comprobar la longitud cuando se realice la búsqueda del filtro

  const handleClick = (id, title, poster, date) => {
    const favorites = JSON.parse(localStorage.getItem(`${user}-Favorites`));

    const newFavorite = { id: id, title: title, poster, date };

    if (!favorites.some((favorite) => favorite.id === newFavorite.id)) {
      const addFavorite = [...favorites, newFavorite];
      !favorites
        ? localStorage.setItem(`${user}-Favorites`, JSON.stringify(newFavorite))
        : localStorage.setItem(`${user}-Favorites`, JSON.stringify(addFavorite));
    }
  };

  const handleSearch = (value) => {
    //console.log(value);
    console.log(series);
    const filteredSeries = series.results.filter((serie) =>
      serie.name.toLowerCase().includes(value.toLowerCase()),
    );
    console.log(filteredSeries);
    setFilteredSeries(filteredSeries);
    setNoResultFiltered(filteredSeries.length === 0);
  };

  return (
    <>
      <h1>Series</h1>

      <input className="search" onChange={(e) => handleSearch(e.target.value)} />
      <div className="cards-container">
        {series.results === undefined ? (
          <h1>Loading...</h1>
        ) : noResultFiltered ? (
          <h2>No hay criterios de búsqueda</h2>
        ) : filteredSeries.length > 0 ? (
          filteredSeries.map((serie) => (
            <Card
              key={serie.id}
              id={serie.id}
              image={serie.poster_path}
              name={serie.name}
              date={serie.first_air_date}
              actionClick={() =>
                handleClick(serie.id, serie.name, serie.poster_path, serie.first_air_date)
              }
            />
          ))
        ) : (
          series.results.map((serie) => (
            <Card
              key={serie.id}
              id={serie.id}
              image={serie.poster_path}
              name={serie.name}
              date={serie.first_air_date}
              actionClick={() =>
                handleClick(serie.id, serie.name, serie.poster_path, serie.first_air_date)
              }
            />
          ))
        )}
      </div>
      {!filteredSeries.length > 0 && (
        <div className="btn-pages">
        {page !== 1 && <ButtonStyle variant='primary' theme={theme} onClick={previousPage}>Anterior</ButtonStyle>}
        {page !== series.total_pages && <ButtonStyle variant='primary' theme={theme} onClick={nextPage}>Siguiente</ButtonStyle>}
        </div>
      )}
    </>
  );
};

export default Series;
