import { useEffect } from "react"
import { useState } from "react"
import { getMovies } from "../services/movies"
import { getSeries } from "../services/series";

const useRequest = () => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(1);
  
    const getData = async () => {
      const dataMovies = await getMovies(page);
      const dataSeries = await getSeries(page);
  
      setMovies(dataMovies);
      setSeries(dataSeries);
    };
  
    useEffect(() => {
      getData();
    }, [page]);
  
    const nextPage = () => {
      setPage(page => page + 1);
    };
  
    const previousPage = () => {
      setPage(page => page - 1);
    };
  
    return { movies, series, page, nextPage, previousPage };
  };

  export default useRequest