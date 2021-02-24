import React from 'react';
import '../Styles/Navigator.css'
import { Navbar, Nav } from 'react-bootstrap';
import { scroller } from 'react-scroll';

class Navigator extends React.Component {
    render() {
        return (
            <Navbar id="navigator" className="navbar-color px-0" collapseOnSelect expand="md" variant="dark" fixed="top">
                <Navbar.Toggle className="navbar-toggle-color" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto" fill>
                        <Nav.Link onSelect={() => scroller.scrollTo('welcome', {
                            smooth: true,
                            duration: 700,
                        })} href="#welcome"><div className="navbar-block">Welcome<div className="navbar-underline"></div></div></Nav.Link>
                        <Nav.Link onSelect={() => scroller.scrollTo('about', {
                            smooth: true,
                            duration: 700,
                        })} href="#about"><div className="navbar-block">About me<div className="navbar-underline"></div></div></Nav.Link>
                        <Nav.Link onSelect={() => scroller.scrollTo('education', {
                            smooth: true,
                            duration: 700,
                        })} href="#education"><div className="navbar-block">Education<div className="navbar-underline"></div></div></Nav.Link>
                        <Nav.Link onSelect={() => scroller.scrollTo('experience', {
                            smooth: true,
                            duration: 700,
                        })} href="#experience"><div className="navbar-block">Experience<div className="navbar-underline"></div></div></Nav.Link>
                        <Nav.Link onSelect={() => scroller.scrollTo('skill', {
                            smooth: true,
                            duration: 700,
                        })} href="#skill"><div className="navbar-block">Skills<div className="navbar-underline"></div></div></Nav.Link>
                        <Nav.Link onSelect={() => scroller.scrollTo('project', {
                            smooth: true,
                            duration: 700,
                        })} href="#project"><div className="navbar-block">Project<div className="navbar-underline"></div></div></Nav.Link>
                        <Nav.Link onSelect={() => scroller.scrollTo('contact', {
                            smooth: true,
                            duration: 700,
                        })} href="#contact"><div className="navbar-block">Contact Me<div className="navbar-underline"></div></div></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
    }
}

export default Navigator;