import React from 'react'
import {Link} from 'react-router-dom'

//Third Party
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button} from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand href="#home">MovieSearcher</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
      <Nav>
        <Nav.Link href="#deets"><Button variant="success">IMDB</Button></Nav.Link>
        <Nav.Link eventKey={2} href="#memes"><Button variant="info">GitHub</Button></Nav.Link>
    </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
