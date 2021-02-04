import Particles from 'react-particles-js';
import React from 'react';
import '../Styles/ContactMe.css';
import { Container, Row, Col } from 'react-bootstrap';

class ContactMe extends React.Component {
    render() {
        return (
            <div id="contact">
                <div className="contact-particle">
                    <Particles
                        className="particle-bg"
                        canvasClassName="about-particle-behind"
                        params={{
                            "particles": {
                                "number": {
                                    "value": 150,
                                    "density": {
                                        "enable": true,
                                        "value_area": 1000
                                    }
                                },
                                "color": {
                                    "value": ["#d2ffff", "#d2d2ff", "#ffd2d2", "#ffffd2"]
                                },
                                "size": {
                                    "value": 5
                                },
                                "line_linked": {
                                    "enable": true,
                                    "distance": 150,
                                    "opacity": 0.5
                                },
                                "move": {
                                    "speed": 5
                                },
                                "opacity": {
                                    "anim": {
                                        "enable": true,
                                        "opacity_min": 0.1,
                                        "speed": 1,
                                        "sync": false
                                    }
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }} />
                </div>

                <Container className="contact-container">
                    <Row>
                        <Col xs="12" md="5"> You can contact me at: wilsonhsu0102@gmail.com </Col>
                        <Col xs="12" md="2"> <div className="contact-horizontal-line"> </div> <div className="contact-or">or</div> <div className="contact-horizontal-line"> </div></Col>
                        <Col xs="12" md="5"> Leave me a message </Col>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default ContactMe;