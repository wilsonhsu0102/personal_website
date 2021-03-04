import React from 'react';
import '../Styles/Navigator.css'
import { Navbar, Nav } from 'react-bootstrap';
import { scroller } from 'react-scroll';

class Navigator extends React.Component {
    constructor(props) {
        super(props)
        this.content = this.props.content
    }
    render() {
        let links = this.props.pages.map((active, i) => {
            return (<Nav.Link key={"navLink" + i.toString()} active={active} onSelect={() => scroller.scrollTo(this.content[i].id, {
                smooth: true,
                duration: 700,
            })} href={"#" + this.content[i].id}><div className="navbar-block">{this.content[i].navText}<div className="navbar-underline"></div></div></Nav.Link>);
        })
        return (
            <Navbar id="navigator" className="navbar-color px-0" collapseOnSelect expand="md" variant="dark" fixed="top">
                <Navbar.Toggle className="navbar-toggle-color" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto" fill>
                        {links}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
    }
}

export default Navigator;