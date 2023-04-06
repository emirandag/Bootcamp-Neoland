import useAxios from "../hooks/useAxios";

export const getMovies = async (page) =>  {


    const optionsRequest = {
        method: "GET",
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            page: page
        }
    }

    return await useAxios(optionsRequest)
}