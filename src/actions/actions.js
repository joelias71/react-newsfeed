import axios from '../data/axios'
import { getTodayDate } from '../util/date'

export const SET_DATA_FROM_SERVICE = 'SET_DATA_FROM_SERVICE'
export const SET_TITLE = 'SET_TITLE'
export const SERVICE_ERROR = 'SERVICE_ERROR'
export const CLEANUP = 'CLEANUP'

export const fetchData = id => {

    cleanup()

    if(id !== '404') {
        const uri = id? `news/category/${id}` : `latest/${getTodayDate()}`

        return dispatch => {
            axios.get(uri)
            .then(response => dispatch(setDataFromService(response)))
            .catch(error => dispatch(setError(error)))
        }
    } else {
        return dispatch => {
            dispatch(setError('Ruta no encontrada'))
        }
    }
}

export const searchData = value => {

    cleanup()

    return dispatch => {
        axios.get(`search/${value}`)
        .then(response => dispatch(setDataFromService(response)))
        .catch(error => dispatch(setError(error)))
    }
}

export const setDataFromService = data => {
    return {
        type: SET_DATA_FROM_SERVICE,
        data
    }
}

export const cleanup = () => {
    return {
        type: CLEANUP
    }
}

export const setTitle = title => {
    return {
        type: SET_TITLE,
        title
    }
}

export const setError = error => {
    return {
        type: SERVICE_ERROR,
        error
    }
}
