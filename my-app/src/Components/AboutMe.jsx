import React from 'react';
import '../Styles/AboutMe.css';
import ParticlesConfig from '../Resources/about-particle-config.json';
import { Button, Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import Particles from 'react-particles-js';
import profilePic from '../Resources/Profile.png';
import resume from '../Resources/WilsonHsu_Resume.pdf';

class AboutMe extends React.Component {
    render() {
        return (
            <div id="about">
                <div className="particle-div">
                    <Particles
                        className="particle-bg"
                        canvasClassName="particle-behind"
                        params={ParticlesConfig} />
                </div>
                <div className="page-div">
                    <Row className="about-info-box justify-content-center">
                        <Col className="about-title-row" xs={{ span: 12 }}><div className="section-title about-title">About Me</div></Col>
                        <Col xs={{ span: 12 }} md={{ span: 3 }}>
                            <Row><Image className="about-profile-pic" src={profilePic} roundedCircle /></Row>
                            <Row>
                                <Col className="about-icon" xs="4">
                                    <a href="https://www.linkedin.com/in/hsu-wilson/" target="_blank" rel="noreferrer" className="about-icon-effect">
                                        <FontAwesomeIcon className="svg-link" icon={faLinkedinIn} size="2x" />
                                    </a>
                                </Col>
                                <Col className="about-icon" xs="4">
                                    <a href="https://github.com/wilsonhsu0102" target="_blank" rel="noreferrer" className="about-icon-effect">
                                        <FontAwesomeIcon className="svg-link" icon={faGithub} size="2x" />
                                    </a>
                                </Col>
                                <Col className="about-icon" xs="4">
                                    <a href="mailto:wilsonhsu0102@gmail.com" className="about-icon-effect">
                                        <FontAwesomeIcon className="svg-link" icon={faEnvelope} size="2x" />
                                    </a>
                                </Col>
                                <Col className="about-icon" xs="4">
                                    <a href="https://www.facebook.com/ho.ho.hotwheels/" target="_blank" rel="noreferrer" className="about-icon-effect">
                                        <FontAwesomeIcon className="svg-link" icon={faFacebookF} size="2x" />
                                    </a>
                                </Col>
                                <Col className="about-icon" xs="4">
                                    <a href="https://www.instagram.com/3wheels.on/" target="_blank" rel="noreferrer" className="about-icon-effect">
                                        <FontAwesomeIcon className="svg-link" icon={faInstagram} size="2x" />
                                    </a>
                                </Col>
                                <Col className="about-icon" xs="4">
                                    <a href="https://twitter.com/wilsonhsu0102" target="_blank" rel="noreferrer" className="about-icon-effect">
                                        <FontAwesomeIcon className="svg-link" icon={faTwitter} size="2x" />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={{ span: 12 }} md={{ offset: 1, span: 8 }}>
                            <Row>
                                <Col className="about-descriptions description" xs={{ span: 12, order: 2 }} md={{ span: 12, order: 1 }}>
                                    Hi! I am Wilson, happy to have you and here is a little background about me.👨‍💻<br /><br />
                                    I'm a 4<sup>th</sup> year Computer Science student at University of Toronto, currently on my coop term, working for Environment and Climate Change Canada as a Web Application Developer.<br /><br />
                                    Computers have always been a thing to me when I was growing up. In the beginning it was simply for games, then it got a whole lot more interesting after I learned to look into the logic (🧙‍♂️ the magic) behind the screen.
                                    My world has changed since that moment. From replicating the Snake game by watching Youtube tutorials and building simple Email bot to annoy my friend. All that leads to later on winning an award with my team at a hackathon and learning to classify handwritten digits using convolutional neural network.<br /><br />
                                    It has been a great journey, and I can't wait to see what else is ahead for me. I am open to all opportunities, but Software Engneering and Machine Learning is of particular interest to me.
                                </Col>
                                <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 2 }} className="about-resume justify-content-center">
                                    <Button className="about-resume-btn description" href={resume} download>
                                        <div className="about-resume-text">Download Resume</div>
                                        <FontAwesomeIcon className="about-resume-svg description" icon={faDownload} />
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </div>
        );
    }
}

export default AboutMe;