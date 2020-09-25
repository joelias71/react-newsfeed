import { combineReducers } from 'redux'
import { SET_DATA_FROM_SERVICE, SET_TITLE, SERVICE_ERROR } from '../actions/actions'

const news = (state = { title: 'Últimas noticias', data: [], error: null},  action) => {

    if(action.type === SET_DATA_FROM_SERVICE) {
        //get the first 100 elements of the api, 
        //because sometimes it returns mora than 2k
        //elements and gets slow
        const list = action.data.data.slice(0, 100)

        return {
            ...state,
            data: list,
            error: (list.length === 0)?'No se encontraron datos':null
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
