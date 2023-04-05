import React, { useEffect } from 'react';


const Profile = () => {

  return (
    <>


        <h1>Bienvenido {localStorage.getItem('user')}</h1>

    </>
    
    
  )
};

export default Profile;
