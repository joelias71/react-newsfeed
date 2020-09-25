import axios from 'axios'

/** base url to make requests to all the news */
const instance = axios.create({
    baseURL: 'https://api.canillitapp.com/'
})

export default instance