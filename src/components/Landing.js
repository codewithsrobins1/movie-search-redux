import React, { Component } from 'react'
import {connect} from 'react-redux'

//Components
import SearchForm from './SearchForm'
import MoviesList from './MoviesList'
import Spinner from './Spinner'

//BootStrap
import {Container} from 'react-bootstrap'

export class Landing extends Component {
    render() {
        const {loading} = this.props    //destructure loading from the props

        return (
            <div>
                <Container>                
                    <SearchForm />
                    {/* If loading is true, show spinner, else show the movielist */}
                    {loading ? <Spinner /> : <MoviesList />} 
                </Container>
            </div>
        )
    }
}

//State is Passed as Props 
const mapStateToProps = (state) => ({
    loading: state.movies.loading       //Check the loading state
})


export default connect(mapStateToProps)(Landing)
