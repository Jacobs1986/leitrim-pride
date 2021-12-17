import React from "react";

// Styling
import './navbar.css';

// Bootstrap
import { Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
    return (
        <div>
            <Container className='nav-container'>
                <Navbar collapseOnSelect expand='md' variant='light' id='navigation-bar'>
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
                            <Nav.Link className='nav-home link' href="/">Home</Nav.Link>
                            <NavDropdown title='About Us' className='nav-about link'>
                                <NavDropdown.Item href='/team'>Who We Are</NavDropdown.Item>
                                <NavDropdown.Item>Our Mission</NavDropdown.Item>
                                <NavDropdown.Item>Constitution</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='nav-get link'>Get Involved</Nav.Link>
                            <Nav.Link className='nav-resources link'>Resources</Nav.Link>
                            <Nav.Link className='nav-donate link'>Donate</Nav.Link>
                            <Nav.Link href='/contact' className='nav-contact link'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};