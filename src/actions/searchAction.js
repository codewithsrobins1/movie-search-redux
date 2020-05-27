import {SEARCH_MOVIE} from './types'
import axios from 'axios'

//Search Movie Action Creator - Search for a movie by passing in text typed by the user
export const searchMovie = (text) => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

// export const searchMovie = (text) => async dispatch => {
//     const urlBase = 'http://www.omdbapi.com/?t='
//     const key = 'apikey=a3d723dc'
//     const response = await axios.get(`${urlBase}${text}&${key}`);

//     dispatch({
//         type: SEARCH_MOVIE,
//         payload: response.title
//     })
// }