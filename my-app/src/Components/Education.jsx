import React from 'react';
import '../Styles/Education.css';
import { Image, Button, Container, Row, Col } from 'react-bootstrap'
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
                        <Col xs="12" lg="6" className="education-info sub-title">
                            H.B.Sc. | Since 2017 - Expected 2022<br/>Specialize in Computer Science<br />Focus Area in Artificial Intelligence<br />Minor in Mathematics<br />cGPA:3.83/4.00
                        </Col>
                    </Row>
                    <Row className="sub-title education-course">Courses that interested me</Row>
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