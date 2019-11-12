import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";

const nav = () => {
  return (
    <div className="nav-background">
      <Navbar className="nav-background" bg="dark" expand="lg">
        <Navbar.Brand>
          <Link className="navbar-brand text-white" to="/">Justin Garcia</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link className="nav-link text-white" id="navlink" to="/resume">Resume</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link text-white" id="navlink" to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link text-white" id="navlink" to="/projects">Projects</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link text-white" id="navlink" to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default nav;
