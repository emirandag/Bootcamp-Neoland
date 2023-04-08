import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';


const Profile = () => {

    const user = localStorage.getItem('user')

    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(`${user}-Favorites`)));

    console.log(favorites);
    const handleClick = (id) => {


        const removeFavorite = favorites.filter(favorite => favorite.id !== id);

        localStorage.setItem(`${user}-Favorites`, JSON.stringify(removeFavorite))
        setFavorites(removeFavorite);

    }




  return (
    <>


        <h1>Bienvenido {user}</h1>


        <div className="cards-container">
            {
favorites.length === 0 ? (
    <h2>No tienes favoritos agregados</h2>
  ) : (
    favorites.map((favorite) => (
      <Card
        key={favorite.id}
        image={favorite.poster}
        name={favorite.title}
        date={favorite.date}
        actionClick={() => handleClick(favorite.id)}
        //actionClick={() => handleClick(movie.id, movie.title, movie.poster_path, movie.release_date)}
      />
    ))
  )
            }
        
      </div>

    </>
    
    
  )
};

export default Profile;
