import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchMovie, setLoading} from '../actions/searchAction'

//Components


//Bootstrap
import {Card, Row, ListGroup, Container, Col, Button} from 'react-bootstrap'

export class Movie extends Component {
    
    //Run this 1 Time When the Component First Renders - Want to Run IMDB Query to get Information For Particular Movie
    componentDidMount(){
        //params = last part of url (ex: http://localhost:3001/movie/tt0848228 --- tt0848228)
        this.props.fetchMovie(this.props.match.params.id)  //fetchMovie takes an id; Get access to the movie id using params
        this.props.setLoading();   //set the loading to true
    }

    render() {
        const {movie} = this.props;
        return (
            <React.Fragment>
                <Container className="mt-4" >
                    <Row>
                        <Col lg={4}>
                            <Card>
                                <Card.Body>
                                    <img src={movie.Poster} alt="Movie Poster" />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={8}>
                            <h2 mb={4}>{movie.Title}</h2>
                            <ListGroup>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">Genre: </span>{movie.Genre}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">Released: </span>{movie.Released}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">Rated: </span>{movie.Rated}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">IMDB Rating: </span>{movie.imdbRating}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">Director: </span>{movie.Director}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">Writer: </span>{movie.Writer}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span className="font-weight-bold">Actors: </span>{movie.Actors}
                                </ListGroup.Item>                             
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Card className="bg-light my-5 text-dark">
                            <Col lg={12}>
                                <h3>About</h3>
                                {movie.Plot}
                                <hr />
                                <Link to="/"><Button variant="primary">Back to search</Button></Link>
                            </Col>
                        </Card>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

//mapStateToProps to get component to access the state via props
const mapStateToProps = (state) => {
    return {
        loading: state.movies.loading,
        movie: state.movies.movie
    }
}

//Connect With the Redux Store
export default connect(mapStateToProps,{
    fetchMovie,
    setLoading
})(Movie)
