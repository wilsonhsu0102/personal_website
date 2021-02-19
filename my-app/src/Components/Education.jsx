import React from 'react';
import '../Styles/Education.css';
import { Image, Button, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareRootAlt, faCertificate, faBrain, faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons';
import UofTLogo from '../Resources/UofTLogo.png';

class Education extends React.Component {
    render() {
        return (
            <div id="education" className="page-div">
                <Container className="education-container">
                    <Row className="justify-content-center">
                        <Col xs={{ offset: 0 }} md={{ offset: 1 }}> <div className="title-horizontal-left"> </div> </Col>
                        <Col xs="auto" className="section-title"> Education </Col>
                        <Col> <div className="title-horizontal-right"> </div> </Col>
                        <Col xs="0" md="1"></Col>
                    </Row>
                    <Row className="experience-content justify-content-center">
                        <Col xs="12" lg="6">
                            <Image className="education-uoftlogo" src={UofTLogo} />
                        </Col>
                        <Col xs="12" lg="6">
                            <Row className="education-info">
                                <Col xs="12" lg="1" className="education-svg">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </Col>
                                <Col xs="12" lg="auto">
                                    H.B.Sc. | 2017 - 2022 (Expected)
                                </Col>
                            </Row>
                            <Row className="education-info">
                                <Col xs="12" lg="1" className="education-svg">
                                    <FontAwesomeIcon icon={faCode} />
                                </Col>
                                <Col xs="12" lg="auto">
                                    Specialize in Computer Science
                                </Col>
                            </Row>
                            <Row className="education-info">
                                <Col xs="12" lg="1" className="education-svg">
                                    <FontAwesomeIcon icon={faBrain} />
                                </Col>
                                <Col xs="12" lg="auto">
                                    Focus Area in Artificial Intelligence
                                </Col>
                            </Row>
                            <Row className="education-info">
                                <Col xs="12" lg="1" className="education-svg">
                                    <FontAwesomeIcon icon={faSquareRootAlt} />
                                </Col>
                                <Col xs="12" lg="auto">
                                    Minor in Mathematics
                                </Col>
                            </Row>
                            <Row className="education-info">
                                <Col xs="12" lg="1" className="education-svg">
                                    <FontAwesomeIcon icon={faCertificate} />
                                </Col>
                                <Col xs="12" lg="auto">
                                    cGPA:3.83/4.00
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="sub-title education-course justify-content-center">
                        <Col xs="12">
                            Courses that interested me

                        </Col>
                        <Col xs="12">
                            <div className="skill-title-bar"></div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center education-description">
                        <Button className="blob-btn" onClick={() => window.open('https://fas.calendar.utoronto.ca/course/csc301h1')}>CSC301 Intro. to Software Engineering</Button>
                        <Button className="blob-btn" onClick={() => window.open('https://fas.calendar.utoronto.ca/course/CSC309H1')}>CSC309 Programming on the Web</Button>
                        <Button className="blob-btn" onClick={() => window.open('https://fas.calendar.utoronto.ca/course/CSC311H1')}>CSC311 Intro. to Machine Learning</Button>
                        <Button className="blob-btn" onClick={() => window.open('https://fas.calendar.utoronto.ca/course/CSC324H1')}>CSC324 Principles of Programming Languages</Button>
                        <Button className="blob-btn" onClick={() => window.open('https://fas.calendar.utoronto.ca/course/CSC343H1')}>CSC343 Intro. to Databases</Button>
                        <Button className="blob-btn" onClick={() => window.open('https://fas.calendar.utoronto.ca/course/CSC369H1')}>CSC369 Operating Systems</Button>
                        <Button className="blob-btn" onClick={() => window.open('https://fas.calendar.utoronto.ca/course/CSC373H1')}>CSC373 Algorithm Design and Analysis</Button>
                        <Button className="blob-btn" onClick={() => window.open('https://fas.calendar.utoronto.ca/course/CSC384H1')}>CSC384 Intro. to AI</Button>
                        <Button className="blob-btn" onClick={() => window.open('https://fas.calendar.utoronto.ca/course/CSC485H1')}>CSC485 Computational Linguistics</Button>
                    </Row>
                    <Row className="justify-content-center end-row">
                        <Col xs={{ offset: 0 }} md={{ offset: 1 }}>
                            <div className="end-horizontal"> </div>
                        </Col>
                        <Col xs="0" md="1"></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Education;