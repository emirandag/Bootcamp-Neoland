import './App.css';

import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ThemeContext } from './context/ThemeProvider';
import { getMovies } from './services/movies';
import { getSeries } from './services/series';

const App = () => {
  const { theme } = useContext(ThemeContext);


  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  useEffect(() => {
    (async () => {
      setMovies(await getMovies());
      setSeries(await getSeries());
    })();
  }, []);


  return (
    <div className={`App color-${theme}`}>
      <Header />
      <main className="main">
        {/* <Outlet /> */}
        <Outlet context={[movies, series]} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
