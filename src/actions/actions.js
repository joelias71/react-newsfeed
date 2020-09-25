import axios from '../data/axios'
import { getTodayDate } from '../util/date'

export const SET_DATA_FROM_SERVICE = 'SET_DATA_FROM_SERVICE'
export const SET_TITLE = 'SET_TITLE'

export const fetchData = id => {

    const uri = id? `news/category/${id}` : `latest/${getTodayDate()}`

    return async dispatch => {
        const response = await axios.get(uri)
        dispatch(setDataFromService(response))
    }
}

export const setDataFromService = data => {
    return {
        type: SET_DATA_FROM_SERVICE,
        data
    }
}

export const setTitle = title => {
    return {
        type: SET_TITLE,
        title
    }
}

//return fetchData(`news/category/${action.id}`)
//return fetchData(`latest/${action.date}`)
//return fetchData(`search/${action.value}`)