import {
    SEARCH_MOVIE, 
    FETCH_MOVIES
} from '../actions/types'

const initialState = {
    text: '',  // <-- The Search text user enters
    movies: [], //<-- The search from the search result
    loading: false, // <-- Control loading spinner display
    movie: [] //<-- indiviual movie
}

//Export a function that takes passes initial state and an action - then use Switch and case to return
export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_MOVIE:
            return {
                ...state,               // <-- return the state
                text: action.payload,   // <-- return the payload
                loading: false          // Set the loading to false
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
            }         
        default:
            return state
    }
}