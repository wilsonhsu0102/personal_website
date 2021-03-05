import Particles from 'react-particles-js';
import React from 'react';
import '../Styles/ContactMe.css';
import ParticlesConfig from '../Resources/contact-particle-config.json';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import emailjs from 'emailjs-com';

class ContactMe extends React.Component {
    constructor(props) {
        super(props)
        this.emailSender = React.createRef();
        this.emailContent = React.createRef();
        this.state = {
            emailSuccess: {
                display: 'none'
            },
            emailError: {
                display: 'none'
            }
        }
        this.content = this.props.content
        this.links = this.props.links
    }
    sendEmail = (e) => {
        e.preventDefault();
        const variables = { from_name: this.emailSender.current.value, message: this.emailContent.current.value };
        emailjs.send(this.content.emailJS.serviceId, this.content.emailJS.templateId, variables, this.content.emailJS.userId)
            .then(res => {
                this.setState({
                    emailSuccess: {
                        display: 'block'
                    },
                    emailError: {
                        display: 'none'
                    }
                })
                this.emailContent.current.value = "";
                this.emailSender.current.value = "";
            })
            .catch(err => {
                this.setState({
                    emailSuccess: {
                        display: 'none'
                    },
                    emailError: {
                        display: 'block'
                    }
                })
                console.log(err)
            })
    }

    render() {
        let currentYear = new Date().getFullYear();
        let contactLinks = this.links.map((link) => {
            return (
                <Col className="contact-icon" xs="4" key={link.name}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="about-icon-effect">
                        <FontAwesomeIcon className="svg-link" icon={link.icon} size="2x" />
                    </a>
                </Col>
            );
        })
        return (
            <div id={this.content.id} className="page-div">
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
                                {contactLinks}
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
                                <Col className="contact-method" xs={{ offset: 0, span: 12 }} md={{ offset: 3, span: 9 }}>
                                    Leave me a message
                                </Col>
                            </Row>
                            <Form.Row className="contact-form-row">
                                <Col xs="12" md="3">
                                    <Form.Label className="contact-msg-category">Your  name</Form.Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Form.Control type="name" ref={this.emailSender} />
                                </Col>
                            </Form.Row>
                            <Form.Row className="contact-form-row">
                                <Col xs="12" md="3">
                                    <Form.Label className="contact-msg-category">Let me know</Form.Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Form.Control className="contact-msg-textArea" as="textarea" rows={3} type="info" ref={this.emailContent} />
                                </Col>
                            </Form.Row>
                            <Row className="contact-form-row">
                                <Col xs={{ offset: 0, span: 12 }} md={{ offset: 3, span: 6 }}>
                                    <div className="email-success email-sent-status" style={this.state.emailSuccess}>Email sent successfully</div>
                                    <div className="email-error email-sent-status" style={this.state.emailError}>There was an error</div>
                                </Col>
                                <Col xs="12" md="3">
                                    <Button className="contact-send-btn" variant="primary" type="submit" onClick={this.sendEmail}>
                                        <div className="contact-send-text">Send</div>
                                        <FontAwesomeIcon className="contact-send-svg" icon={faPaperPlane} />
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center copy-right-row1">
                        <small> Designed by Wilson Hsu 😎</small>
                    </Row>
                    <Row className="justify-content-center copy-right-row2">
                        <small>  &copy; Copyright 2020 - {currentYear} | All Rights Reserved. </small>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default ContactMe;