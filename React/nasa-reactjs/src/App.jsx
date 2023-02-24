import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Figure from './components/Figure/Figure';
import Input from './components/IU/Input/Input';

const App = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);

  const NASA_URL = import.meta.env.VITE_NASA_URL
  const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY

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
      <main className="main">
        <h1>Astronomy Picture of the Day</h1>
        <Input type="date" handleInput={handleInput} />
        {date > today ? <h2>Please choose a previous date</h2> : <Figure data={apod} />}
      </main>  
      <Footer url={NASA_URL} text={NASA_URL} />
    </div>
  );
};

export default App;
