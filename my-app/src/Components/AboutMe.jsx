import React from 'react';
import '../Styles/AboutMe.css'
import ParticlesConfig from '../Resources/about-particle-config.json';
import { Button, Image, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
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
                                <Col className="about-icon about-icon-first-row" xs="3" md="6">
                                    <a href="https://www.instagram.com/3wheels.on/" target="_blank" className="about-icon-effect">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    </a>
                                </Col>
                                <Col className="about-icon about-icon-first-row" xs="3" md="6">
                                    <a href="https://github.com/wilsonhsu0102" target="_blank" className="about-icon-effect">
                                        <FontAwesomeIcon icon={faGithub} size="2x" />
                                    </a>
                                </Col>
                                <Col className="about-icon" xs="3" md="6">
                                    <a href="https://www.facebook.com/ho.ho.hotwheels/" target="_blank" className="about-icon-effect">
                                        <FontAwesomeIcon icon={faFacebookF} size="2x" />
                                    </a>
                                </Col>
                                <Col className="about-icon" xs="3" md="6">
                                    <a href="https://www.linkedin.com/in/hsu-wilson/" target="_blank" className="about-icon-effect">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                    </a>
                                </Col>

                            </Row>
                        </Col>
                        <Col xs={{ span: 12 }} md={{ offset: 1, span: 8 }}>
                            <Row>
                                <Col className="about-descriptions" xs={{ span: 12, order: 2 }} md={{ span: 12, order: 1 }}>
                                    Hi! I am Wilson, happy to have you and here is a little background about me.<br/><br/>
                                    I am a 4<sup>th</sup> year Computer Science student at University of Toronto, currently on my coop term, working for Environment and Climate Change Canada.<br/><br/>
                                    I been moving around the globe my whole life, making new friends, getting to know different cultures. I grew up as a child in Taiwan,
                                    I was only grade five when my parents asked me if I would like to study abroad in Vancouver, Canada. Knowing that I would have to start
                                    speaking a different language and live in a house with no familiar faces did not hesitate me from answering that question. It is not
                                    that I do not like my parents of course. It is that they taught me to hold on to the opportunities that I get.<br/>
                                    (and because it is a cool kid thing to study abroad 😎).
                                </Col>
                                <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 2 }} className="about-resume justify-content-center">
                                    <a className="about-resume-btn" href={resume} download> Download Resume </a>
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