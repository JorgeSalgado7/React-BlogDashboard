/**
 * @API SERVICE
 * @GET ASYNC FUNCTION
 * @RETURN AN ARRAY IF RESPONES STATUS === 200
*/
import axios from 'axios'

export const GET = (endpoint) => {
    return axios.get(endpoint)
    .then((response) => {
        if(response.status === 200) return response.data
    })
}

