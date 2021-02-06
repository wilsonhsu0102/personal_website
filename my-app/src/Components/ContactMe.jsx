import Particles from 'react-particles-js';
import React from 'react';
import '../Styles/ContactMe.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'


class ContactMe extends React.Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <div id="contact">
                <div className="contact-particle">
                    <Particles
                        className="particle-bg"
                        canvasClassName="about-particle-behind"
                        params={{
                            "particles": {
                                "number": {
                                    "value": 200,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "line_linked": {
                                    "enable": false,
                                    "opacity": 0.02
                                },
                                "move": {
                                    "direction": "random",
                                    "speed": 0.5
                                },
                                "size": {
                                    "value": 1
                                },
                                "opacity": {
                                    "anim": {
                                        "enable": true,
                                        "speed": 1.2,
                                        "opacity_min": 0.05
                                    }
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onclick": {
                                        "enable": true,
                                        "mode": "push"
                                    }
                                },
                                "modes": {
                                    "push": {
                                        "particles_nb": 1
                                    }
                                }
                            },
                            "retina_detect": true
                        }} />
                </div>

                <Container className="contact-container">
                    <Row>
                        <Col xs="12" md="5">
                            <Row className="justify-content-center">You can contact me at:</Row>
                            <Row className="contact-form-row justify-content-center">wilsonhsu0102@gmail.com</Row>
                            <Row className="contact-form-row justify-content-center">
                                <Col className="contact-icon" xs="3">
                                    <a href="#" className="about-icon-effect">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    </a>
                                </Col>
                                <Col className="contact-icon" xs="3">
                                    <a href="#" className="about-icon-effect">
                                        <FontAwesomeIcon icon={faGithub} size="2x" />
                                    </a>
                                </Col>
                                <Col className="contact-icon" xs="3">
                                    <a href="#" className="about-icon-effect">
                                        <FontAwesomeIcon icon={faFacebookF} size="2x" />
                                    </a>
                                </Col>
                                <Col className="contact-icon" xs="3">
                                    <a href="#" className="about-icon-effect">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="12" md="1">
                            <div className="contact-horizontal-line"> </div> <div className="contact-or">or</div> <div className="contact-horizontal-line"> </div>
                        </Col>
                        <Col xs="12" md="6">
                            <Row className="justify-content-center">Leave me a message</Row>
                            <Form.Row className="contact-form-row" controlId="formSenderName">
                                <Col xs="3">
                                    <Form.Label className="contact-msg-category">Your name:</Form.Label>
                                </Col>
                                <Col xs="9">
                                    <Form.Control type="name" placeholder="John Doe" />
                                </Col>
                            </Form.Row>
                            <Form.Row className="contact-form-row" controlId="formSenderInfo">
                                <Col xs="3">
                                    <Form.Label className="contact-msg-category">Contact method:</Form.Label>
                                </Col>
                                <Col xs="9">
                                    <Form.Control type="contactMethod" placeholder="john.doe@email.com" />
                                </Col>
                            </Form.Row>
                            <Form.Row className="contact-form-row" controlId="formInfo">
                                <Col xs="3">
                                    <Form.Label className="contact-msg-category">Let me know:</Form.Label>
                                </Col>
                                <Col xs="9">
                                    <Form.Control className="contact-msg-textArea" as="textarea" rows={3} type="info" />
                                </Col>
                            </Form.Row>
                            <Row className="contact-form-row contact-msg-send">
                                <Button className="contact-send-btn" variant="primary" type="submit">
                                    Send
                            </Button>
                            </Row>

                        </Col>
                    </Row>
                    <Row className="justify-content-center copy-right-row1">
                        <small> &copy; Copyright 2020 - {currentYear} </small>
                    </Row>
                    <Row className="justify-content-center copy-right-row2">
                        <small> All Rights Reserved. </small>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default ContactMe;