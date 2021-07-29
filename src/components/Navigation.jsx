import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import NavDropdown from './NavDropdown';

function Navigation(props){
    return (
        <Navbar bg="light" expand="lg" className="navbar">
            <Container className="nav-container">
                <NavDropdown />
            </Container>
        </Navbar>
    )
}

export default Navigation;