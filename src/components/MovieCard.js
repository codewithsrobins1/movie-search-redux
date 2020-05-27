import React, { Component } from 'react'

//Bootstrap
import {Card, Button} from 'react-bootstrap'

export class MovieCard extends Component {
    render() {
        const {movie} = this.props;   // <-- This movie is bring title,year,imdbID,type, & Poster
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movie.Poster} alt="Movie Poster" />
                    <Card.Body>
                        <Card.Title>{movie.Title} -{movie.Year}</Card.Title>
                        <Card.Text>
                            Movie Details
                        </Card.Text>
                        <Button variant="primary">More Details</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default MovieCard
