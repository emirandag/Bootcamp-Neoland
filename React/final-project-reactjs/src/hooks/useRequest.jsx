import { useEffect } from "react"
import { useState } from "react"
import { getMovieCharacters, getMovies, getMoviesById } from "../services/movies"
import { getSerieCharacters, getSeries, getSeriesById } from "../services/series";

const useRequest = (id) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(1);
    const [moviesId, setMoviesId] = useState();
    const [seriesId, setSeriesId] = useState();
    const [moviesCharacters, setMoviesCharacters] = useState();
    const [seriesCharacters, setSeriesCharacters] = useState();
  
    const getData = async () => {
      const dataMovies = await getMovies(page);
      const dataSeries = await getSeries(page);
  
      setMovies(dataMovies);
      setSeries(dataSeries);
    };

    const getDataById = async () => {
      const dataMoviesId = await getMoviesById(id);
      //const dataSeriesId = await getSeriesById(id);
      const dataCharacterMoviesId = await getMovieCharacters(id);
      setMoviesId(dataMoviesId)
      //setSeriesId(dataSeriesId)
      setMoviesCharacters(dataCharacterMoviesId)
    }

    const getSerieDataById = async () => {
      //const dataMoviesId = await getMoviesById(id);
      const dataSeriesId = await getSeriesById(id);
      const dataCharacterSeriesId = await getSerieCharacters(id);
      //const dataCharacterMoviesId = await getMovieCharacters(id);
      //setMoviesId(dataMoviesId)
      setSeriesId(dataSeriesId)
      setSeriesCharacters(dataCharacterSeriesId)
      //setMoviesCharacters(dataCharacterMoviesId)
    }
  
    useEffect(() => {
      getData();
    }, [page]);


    useEffect(() => {
      getDataById();
      getSerieDataById();
    }, [id]);
  
    const nextPage = () => {
      setPage(page => page + 1);
    };
  
    const previousPage = () => {
      setPage(page => page - 1);
    };
  
    return { movies, series, page, nextPage, previousPage, moviesId, seriesId, moviesCharacters, seriesCharacters };
  };

  export default useRequest