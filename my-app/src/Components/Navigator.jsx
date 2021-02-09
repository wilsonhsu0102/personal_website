import React from 'react';
import '../Styles/Navigator.css'
import { Navbar, Nav } from 'react-bootstrap';
class Navigator extends React.Component {
    render() {
        return (
            <Navbar id="navigator" className="navbar-color px-0" collapseOnSelect expand="md" variant="dark" fixed="top">
                <Navbar.Toggle className="navbar-toggle-color" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto" fill>
                        <Nav.Link href="#welcome"><div className="navbar-block">Welcome<div className="navbar-underline"></div></div></Nav.Link>
                        <Nav.Link href="#about"><div className="navbar-block">About me<div className="navbar-underline"></div></div></Nav.Link>
                        <Nav.Link href="#education"><div className="navbar-block">Education<div className="navbar-underline"></div></div></Nav.Link>
                        <Nav.Link href="#experience"><div className="navbar-block">Work Experience<div className="navbar-underline"></div></div></Nav.Link>
                        <Nav.Link href="#skill"><div className="navbar-block">Skills<div className="navbar-underline"></div></div></Nav.Link>
                        <Nav.Link href="#project"><div className="navbar-block">Project<div className="navbar-underline"></div></div></Nav.Link>
                        <Nav.Link href="#contact"><div className="navbar-block">Contact Me<div className="navbar-underline"></div></div></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
    }
}

export default Navigator;