import { combineReducers } from 'redux'
import { SET_DATA_FROM_SERVICE, SET_TITLE } from '../actions/actions'

const news = (state = { title: 'Inicio', data: []},  action) => {

    if(action.type === SET_DATA_FROM_SERVICE) {
        return {
            ...state,
            data: action.data.data
        }
    }

    if(action.type === SET_TITLE) {
        return {
            ...state,
            title: action.title
        }
    }

    return state
}

export default combineReducers({
    news
})
