import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import NavbarTryBtn from './NavbarTryBtn';
import NavDropdown from './NavDropdown';

function Navigation(props){
    //if current section is 'hero', button won't show up in the navbar.
    return (
        <Navbar bg="light" expand="lg" className="navbar">
            <Container className="nav-container">
                <NavDropdown />
                {!(props.section === 'Hero'|| props.section === 'GetNow')&&<NavbarTryBtn section={props.section}/>}
            </Container>
        </Navbar>
    )
}

export default Navigation;