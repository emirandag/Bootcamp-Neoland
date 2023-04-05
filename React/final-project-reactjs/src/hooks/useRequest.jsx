import { useEffect } from "react"
import { useState } from "react"
import { getMovies } from "../services/movies"
import { getSeries } from "../services/series";

const useRequest = () => {

const [movies, setMovies] = useState([]);
const [series, setSeries] = useState([]);

    const getData = async () => {
        const dataMovies = await getMovies()
        const dataSeries = await getSeries()
        setMovies(dataMovies)
        setSeries(dataSeries)
    }

    useEffect(() => {
        getData()
    }, [])

    return {movies, series}
}


export default useRequest