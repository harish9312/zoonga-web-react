import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navBar.scss';

export class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Kya Zoonga</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">SignUp</Nav.Link>
                        <Nav.Link href="#link">SignIn</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

