import {combineReducers} from 'redux'
import searchReducer from './searchReducer';

export default combineReducers({
    movies: searchReducer // <--Reducer for Searching a movie
})