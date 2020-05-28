import React, { Component } from 'react'
import {connect} from 'react-redux'
import {searchMovie, fetchMovies, setLoading} from '../actions/searchAction.js'

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
        this.props.fetchMovies(this.props.text)       //<-- Pass the state's current text to search
        this.props.setLoading();
    }

    render() {
        return (
            <div>
                <Jumbotron className="align-self">
                <h1>Movie and TV Show Search Web App</h1>
                <p>
                    Find information on your favorite movies and tv shows with a quick search.
                </p>
                <Form onSubmit={this.onSubmit}>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Find a movie or tv show..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={this.onChange}
                        required
                        />
                        <InputGroup.Append>
                        <Button 
                            type="submit"
                            variant="primary"
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
        text: state.movies.text,     // <--state is the global state; movies comes from reducers which has the searchReducer which contains "text"
    }
}

//Connect With the Redux Store
export default connect(mapStateToProps, {
    searchMovie,
    fetchMovies,
    setLoading
})(SearchForm)

