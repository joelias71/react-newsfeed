import { combineReducers } from 'redux'
import { SET_DATA_FROM_SERVICE, SET_TITLE, SERVICE_ERROR } from '../actions/actions'

const news = (data = [],  action) => {

    if(action.type === SET_DATA_FROM_SERVICE) {
        //get the first 100 elements of the api, 
        //because sometimes it returns mora than 2k
        //elements and gets slow
        const list = action.data.data.slice(0, 100)

        return list
    }

    return data
}

const title = (title = 'Últimas noticias', action) => {
    if(action.type === SET_TITLE) {
        return action.title
    }

    return title
}

const error = (error = null, action) => {
    if(action.type === SERVICE_ERROR) {
        return action.error
    }

    return error
}

export default combineReducers({
    news,
    title,
    error
})
