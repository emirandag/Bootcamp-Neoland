import useAxios from "../hooks/useAxios";

export const getSeries = async () =>  {

    const optionsRequest = {
        method: "GET",
        url: 'https://api.themoviedb.org/3/discover/tv',
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY
        }
    }

    return await useAxios(optionsRequest)
}