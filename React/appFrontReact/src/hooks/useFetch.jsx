import { useState, useEffect } from "react"


export const useFetch = () => {

    // 1.- Generamos un estado complejo con lo que necesitamos
    /**
     * En este estado complejo tendremos:
     *  1.- La data
     *  2.- El estado de la 'data' cargando
     *  3.- El seteo de los errores
     */
    const [state, setState] = useState({
        data: null,
        isLoading: null,
        hasError: null
    })


    // 3.- Función que gestiona las asincronias y la modificación del estado
    const getData = async () => {
        // Cuando se empieza a hacer una llamada asincrona
        setState({ ...state, isLoading: true })

        try {
            // Hacemos la llamada fetch
            const resp = await fetch(url)

            // Si la respuesta no es correcta se lanza un error
            if (!resp.ok) {
                throw new Error(`HTTP ERROR: STATUS ${resp.status}/ ${resp}`)
            } else {
                // Si la respuesta es correcta, la convertimos a JSON
                const data = await resp.json()

                // Como hemos obtenido la data, ponemos el isLoading en false,
                // y metemos la data en el estado.
                setState({
                    data, 
                    isLoading: false,
                    hasError: null
                })
            }
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: error 
            })
        }
    }

    // 2.- Creamos el UseEffect para gestionar la función asíncrona getData
    useEffect(() => {
        // Se lanza cuando se monta por primera vez y cuando se desmonta.
        getData()
    }, [url])
    
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}

export default useFetch