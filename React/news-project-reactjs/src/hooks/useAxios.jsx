import axios from 'axios'

/**
 * 
 * @param {*} options 
 */
const useAxios = async (options) => {
    return await axios.request(options).then((response) => response.data)
}

export default useAxios