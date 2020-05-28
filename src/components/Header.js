import React from 'react'
import {Link} from 'react-router-dom'

//Third Party
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button} from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
        <Link to="/">
          <Navbar.Brand href="#home">MovieSearcher</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
      <Nav>
        <Nav.Link href="https://www.imdb.com/movies-in-theaters/" target="_blank"><Button variant="warning">New Releases</Button></Nav.Link>
        <Nav.Link eventKey={2} href="https://github.com/codewithsrobins1/movie-search-redux" target="_blank"><Button variant="info">GitHub</Button></Nav.Link>
    </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
