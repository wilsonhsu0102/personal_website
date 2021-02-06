import React from 'react';
import '../Styles/AboutMe.css'
import { Button, Image, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import Particles from 'react-particles-js';
import profilePic from '../Resources/Profile.png';

class AboutMe extends React.Component {
    render() {
        return (
            <div id="about">
                <div className="about-particle">
                    <Particles
                        className="particle-bg"
                        canvasClassName="about-particle-behind"
                        params={{
                            "particles": {
                                "number": {
                                    "value": 160,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": ["#d2ffff", "#d2d2ff", "#ffd2d2", "#ffffd2"]
                                },
                                "size": {
                                    "value": 8,
                                    "random": true,
                                    "anim": {
                                        "speed": 4,
                                        "size_min": 0.3
                                    }
                                },
                                "line_linked": {
                                    "enable": false
                                },
                                "move": {
                                    "random": true,
                                    "speed": 1,
                                    "direction": "top",
                                    "out_mode": "out"
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "bubble"
                                    }
                                },
                                "modes": {
                                    "bubble": {
                                        "distance": 250,
                                        "duration": 2,
                                        "size": 0,
                                        "opacity": 0
                                    }
                                }
                            }
                        }} />
                </div>

                <Row className="about-info-box justify-content-center">
                    <Col xs={{ span: 12 }} md={{ span: 3 }}>
                        <Row><Image className="about-profile-pic" src={profilePic} roundedCircle /></Row>
                        <Row>
                            <Col className="about-icon about-icon-first-row" xs="3" md="6">
                                <a href="#" className="about-icon-effect">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </Col>
                            <Col className="about-icon about-icon-first-row" xs="3" md="6">
                                <a href="#" className="about-icon-effect">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                            </Col>
                            <Col className="about-icon" xs="3" md="6">
                                <a href="#" className="about-icon-effect">
                                    <FontAwesomeIcon icon={faFacebookF} size="2x" />
                                </a>
                            </Col>
                            <Col className="about-icon" xs="3" md="6">
                                <a href="#" className="about-icon-effect">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                </a>
                            </Col>

                        </Row>
                    </Col>
                    <Col xs={{ span: 12 }} md={{ offset: 1, span: 8 }}>
                        <Row>
                            <Col className="about-descriptions" xs={{ span: 12, order: 2}} md={{ span: 12, order: 1 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit.
                                Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio.
                                Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend
                                feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec
                                sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra
                                ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida. Etiam in
                                viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas. Mauris a ante in
                                neque interdum fermentum nec non velit. Sed accumsan nisl quis quam imperdiet imperdiet.
                                Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas.
                            </Col>
                            <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 2 }} className="about-resume justify-content-center">
                                <Button className="about-resume-btn"> Download Resume </Button>
                            </Col>
                        </Row>

                    </Col>

                </Row>
            </div>
        );
    }
}

export default AboutMe;