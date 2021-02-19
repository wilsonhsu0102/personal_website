import Particles from 'react-particles-js';
import React from 'react';
import '../Styles/ContactMe.css';
import ParticlesConfig from '../Resources/contact-particle-config.json';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

class ContactMe extends React.Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <div id="contact">
                <div className="particle-div">
                    <Particles
                        className="particle-bg"
                        canvasClassName="particle-behind"
                        params={ParticlesConfig} />
                </div>
                <Container className="contact-container">
                    <Row className="contact-row">
                        <Col xs="12" md="5">
                            <Row>
                                <Col className="contact-method">
                                    Get in touch with me at
                                </Col>
                            </Row>
                            <Row className="contact-form-row justify-content-center">
                                <Col className="contact-icon" xs="4">
                                    <a href="https://www.linkedin.com/in/hsu-wilson/" target="_blank" className="about-icon-effect">
                                        <FontAwesomeIcon className="svg-link" icon={faLinkedinIn} size="2x" />
                                    </a>
                                </Col>
                                <Col className="contact-icon" xs="4">
                                    <a href="https://github.com/wilsonhsu0102" target="_blank" className="about-icon-effect">
                                        <FontAwesomeIcon className="svg-link" icon={faGithub} size="2x" />
                                    </a>
                                </Col>
                                <Col className="contact-icon" xs="4">
                                    <a href="mailto:wilsonhsu0102@gmail.com" className="about-icon-effect">
                                        <FontAwesomeIcon className="svg-link" icon={faEnvelope} size="2x" />
                                    </a>
                                </Col>
                                <Col className="contact-icon" xs="4">
                                    <a href="https://www.facebook.com/ho.ho.hotwheels/" target="_blank" className="about-icon-effect">
                                        <FontAwesomeIcon className="svg-link" icon={faFacebookF} size="2x" />
                                    </a>
                                </Col>
                                <Col className="contact-icon" xs="4">
                                    <a href="https://www.instagram.com/3wheels.on/" target="_blank" className="about-icon-effect">
                                        <FontAwesomeIcon className="svg-link" icon={faInstagram} size="2x" />
                                    </a>
                                </Col>
                                <Col className="contact-icon" xs="4">
                                    <a href="https://twitter.com/wilsonhsu0102" target="_blank" className="about-icon-effect">
                                        <FontAwesomeIcon className="svg-link" icon={faTwitter} size="2x" />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="contact-or-col" xs="12" md="1">
                            <Row noGutters>
                                <Col xs={{ span: 3, offset: 2 }} md={{ span: 3, offset: 0 }} className="contact-horizontal-line"></Col>
                                <Col className="contact-method" xs="2" md="6">or</Col>
                                <Col xs="3" md="3" className="contact-horizontal-line"></Col>
                            </Row>
                        </Col>
                        <Col xs="12" md="6">
                            <Row>
                                <Col className="contact-method" xs={{offset: 0, span: 12}} md={{offset: 3, span: 9}}>
                                    Leave me a message
                                </Col>
                            </Row>
                            <Form.Row className="contact-form-row" controlId="formSenderName">
                                <Col xs="12" md="3">
                                    <Form.Label className="contact-msg-category">Your  name</Form.Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Form.Control type="name" />
                                </Col>
                            </Form.Row>
                            <Form.Row className="contact-form-row" controlId="formInfo">
                                <Col xs="12" md="3">
                                    <Form.Label className="contact-msg-category">Let me know</Form.Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Form.Control className="contact-msg-textArea" as="textarea" rows={3} type="info" />
                                </Col>
                            </Form.Row>
                            <Row className="contact-form-row">
                                <Col xs={{offset: 0, span: 12}} md={{offset: 9, span: 3}}>
                                    <Button className="contact-send-btn" variant="primary" type="submit">
                                        <div className="contact-send-text">Send</div>
                                        <FontAwesomeIcon className="contact-send-svg" icon={faPaperPlane}/>
                                    </Button>
                                </Col>
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