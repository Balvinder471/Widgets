import axios from "axios";

const Wikipedia = axios.create(
    {
        baseURL : 'https://en.wikipedia.org/',
        params : {
            action : 'query',
            list : 'search',
            origin : '*',
            format : 'json'
        }
    }
)

export default Wikipedia