import React, { Component } from 'react'
import {connect} from 'react-redux'

//Components
import MovieCard from './MovieCard'

//Bootstrap
import {Row} from 'react-bootstrap'


export class MovieList extends Component {
    render() {
        const {movies} = this.props;    //access the movies from the state (as props)
        let content = '';

        //If there are movies in the array, display a movie card that takes movie and index and passes props key and movie
        content = movies.length > 0 
        ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />) 
        : null;
        
        return (
            <Row>
                {content}
            </Row>      
        )
    }
}

//State is Passed as Props 
const mapStateToProps = (state) => {
    return{
        movies: state.movies.movies
    }
}

export default connect(mapStateToProps)(MovieList)
