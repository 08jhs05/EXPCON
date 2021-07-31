import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import NavbarTryBtn from './NavbarTryBtn';
import NavDropdown from './NavDropdown';

function Navigation(props){
    //if current section is 'hero' or 'getNow', button won't show up in the navbar. it also wont appear at payment/pricing page
    return (
        <Navbar bg="light" expand="lg" className="navbar">
            <Container className="nav-container">
                <NavDropdown section={props.section}/>
                { window.location.pathname !== "/payment" &&
                    window.location.pathname !== "/pricing" &&
                    props.section !== 'Hero' &&
                    props.section !== 'GetNow' &&
                    <NavbarTryBtn section={props.section}/>
                }
            </Container>
        </Navbar>
    )
}

export default Navigation;