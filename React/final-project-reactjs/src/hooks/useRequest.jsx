import { useEffect } from "react"
import { useState } from "react"
import { getMovieCharacters, getMovies, getMoviesById } from "../services/movies"
import { getSeries } from "../services/series";

const useRequest = (id) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(1);
    const [moviesId, setMoviesId] = useState();
    const [moviesCharacters, setMoviesCharacters] = useState();
  
    const getData = async () => {
      const dataMovies = await getMovies(page);
      const dataSeries = await getSeries(page);
  
      setMovies(dataMovies);
      setSeries(dataSeries);
    };

    const getDataById = async () => {
      const dataMoviesId = await getMoviesById(id);
      const dataCharacterMoviesId = await getMovieCharacters(id);
      setMoviesId(dataMoviesId)
      setMoviesCharacters(dataCharacterMoviesId)
    }
  
    useEffect(() => {
      getData();
    }, [page]);


    useEffect(() => {
      getDataById();
    }, []);
  
    const nextPage = () => {
      setPage(page => page + 1);
    };
  
    const previousPage = () => {
      setPage(page => page - 1);
    };
  
    return { movies, series, page, nextPage, previousPage, moviesId, moviesCharacters };
  };

  export default useRequest