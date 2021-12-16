import React from "react";

// Styling
import './navbar.css';

// Bootstrap
import { Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand='lg' variant='light' id='navigation-bar'>
                    <Navbar.Brand>
                        <img 
                            src="./Images/logo.jpg"
                            alt='Logo'
                            width='40'
                            height='40'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mr-auto'>
                            <Nav.Link>Home</Nav.Link>
                            <NavDropdown title='About Us'>

                            </NavDropdown>
                            <Nav.Link>Get Involved</Nav.Link>
                            <Nav.Link>Resources</Nav.Link>
                            <Nav.Link>Donate</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};