import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Figure from './components/Figure/Figure';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
      <Header />
      <h1>Astronomy Picture of the Day</h1>
      <input type="date" id="photo-date" onChange={handleInput} />
      {date > today ? <h2>Please choose a previous date</h2> : <Figure data={apod} />}
      <Footer url={NASA_URL} text={NASA_URL} />
    </div>
  );
};

export default App;
