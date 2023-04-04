import useAxios from "../hooks/useAxios";

export const getSeries = async () =>  {

    const optionsRequest = {
        method: "GET",
        url: import.meta.env.VITE_APP_SERIES_URL,
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY
        }
    }

    return await useAxios(optionsRequest)
}