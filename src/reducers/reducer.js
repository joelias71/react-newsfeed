import { combineReducers } from 'redux'
import { SET_DATA_FROM_SERVICE, SET_TITLE, SERVICE_ERROR } from '../actions/actions'

const news = (state = { title: 'Últimas noticias', data: [], error: null},  action) => {

    if(action.type === SET_DATA_FROM_SERVICE) {
        return {
            ...state,
            data: action.data.data,
            error: null
        }
    }

    if(action.type === SET_TITLE) {
        return {
            ...state,
            title: action.title
        }
    }

    if(action.type === SERVICE_ERROR) {
        return {
            ...state,
            data: [],
            error: action.error
        }
    }

    return state
}

export default combineReducers({
    news
})
