import useAxios from "../hooks/useAxios";

export const getMovies = async () =>  {

    const optionsRequest = {
        method: "GET",
        url: import.meta.env.VITE_APP_MOVIES_URL,
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY
        }
    }

    return await useAxios(optionsRequest)
}