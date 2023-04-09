import useAxios from "../hooks/useAxios";

export const getSeries = async (page) =>  {

    const optionsRequest = {
        method: "GET",
        url: 'https://api.themoviedb.org/3/discover/tv',
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'es-ES',
            page: page
        }
    }

    return await useAxios(optionsRequest)
}