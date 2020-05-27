import React, { Component } from 'react'
import {connect} from 'react-redux'
import {searchMovie, fetchMovies} from '../actions/searchAction.js'


//BootStrap 
import {Jumbotron, InputGroup, FormControl, Button, Form} from 'react-bootstrap'

export class SearchForm extends Component {

    //Change the State of the Text When input field is updated - Calling on the searchMovie action
    onChange = (e) => {
        this.props.searchMovie(e.target.value);
    }

    //Fetch the movie with the value from the text input field
    onSubmit = (e) => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text)       //<-- Pass the state text to search
    }


    render() {
        return (
            <div>
                <Jumbotron className="align-self">
                <h1>Movie Search Web App</h1>
                <p>
                    Search for your favorite movies, tv-shows, or actors and actresses using IMDB's database.
                </p>
                <Form onSubmit={this.onSubmit}>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Find a movie, tv show, or actor"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={this.onChange}
                        required
                        />
                        <InputGroup.Append>
                        <Button 
                            type="submit"
                            variant="secondary"
                        >
                            Search
                        </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                </Jumbotron> 
            </div>
        )
    }
}

//mapStateToProps to get component to access the state via props
const mapStateToProps = (state) => {
    return {
        text: state.movies.text     // <--state is the global state; movies is reducers which contains the searchReducers states; 
    }
}

//Connect With the Redux Store
export default connect(mapStateToProps, {
    searchMovie,
    fetchMovies
})(SearchForm)

