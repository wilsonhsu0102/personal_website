import React from 'react';
import '../Styles/Navigator.css'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
class Navigator extends React.Component {
    render() {
        return (
            <Navbar id="navigator" className="navbar-color" collapseOnSelect expand="md" variant="dark" sticky="top">
                <Navbar.Brand> COOL </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto" fill>
                        <Nav.Link href="#welcome">Welcome</Nav.Link>
                        <Nav.Link href="#about">About me</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#experience">Work Experience</Nav.Link>
                        <Nav.Link href="#project">Project</Nav.Link>
                        <Nav.Link href="#skill">Skills</Nav.Link>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
    }
}

export default Navigator;