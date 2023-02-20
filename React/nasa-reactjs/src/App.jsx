import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);

  const NASA_URL = 'https://api.nasa.gov/';
  const NASA_API_KEY = 'nm9GuUvsGe1fPmnKk2gqIABqSIUrlm9kThftsGSJ';

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`,
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

  const handleInput = (e) => {
    setDate(e.target.value.toLocaleString());
  };

  return (
    <div className="App">
      <h2 className="title">
        NASA API{' '}
        <img
          className="logo"
          src={'https://api.nasa.gov/assets/img/favicons/favicon-192.png'}
          alt="LOGO NASA"
        />
      </h2>
      <h1>Astronomy Picture of the Day</h1>
      <input type="date" id='photo-date' onChange={handleInput} />
      {
        date > today ? (
          <h2>Please choose a previous date</h2>
        ) : (
          <Figure data={apod} />
        )
      }
      <div className='standard-dialog center'>
        <h1 className='dialog-text'>@lethamburn - 2022 - <a href={NASA_URL}>{NASA_URL}</a></h1>
      </div>
    </div>
  );
};

export default App;
