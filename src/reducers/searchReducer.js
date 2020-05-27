import {
    SEARCH_MOVIE
} from '../actions/types'

const initialState = {
    text = '',  // <-- The Search text user enters
    movies: [], //<-- The search from the search result
    loading: false, // <-- Control loading spinner display
    movie: [] //<-- indiviual movie
}

//Export a function that takes passes initial state and an action - then use Switch and case to return
export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_MOVE:
            return {
                ...state,               // <-- return the state
                text: action.payload,   // <-- return the payload
                loading: false          // Set the loading to false
            }         
        default:
            return state
    }
}