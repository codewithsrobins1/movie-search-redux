import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING} from './types'
import axios from 'axios'

//Search Movie Action Creator - Search for a movie by passing in text typed by the user
export const searchMovie = (text) => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

//Fetch the movies that user requests
export const fetchMovies = (text) => async dispatch => {
    try{
        const urlBase = 'http://www.omdbapi.com/?s='
        const key = 'apikey=a3d723dc'
        const response = await axios.get(`${urlBase}${text}&${key}`);
    
        dispatch({
            type: FETCH_MOVIES,
            payload: response.data.Search
        })
    }
    catch(err){
        alert(err)
    }
}


//Fetch an Invidivual Movie
export const fetchMovie = (id) => async dispatch => { 
    try{
        const urlBase = 'http://www.omdbapi.com/?i='
        const key = 'apikey=a3d723dc'
        const response = await axios.get(`${urlBase}${id}&${key}`);
    
        dispatch({
            type: FETCH_MOVIE,
            payload: response.data
        })
    }
    catch(err){
        alert(err)
    }
}

//Update the Loading State 
export const setLoading = () => {
    return {
        type: LOADING
    }
}
    