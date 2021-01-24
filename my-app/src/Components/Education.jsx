import React from 'react';
import '../Styles/Education.css';
import { Image, Container, Row, Col } from 'react-bootstrap'

class Education extends React.Component {
    render() {
        return (
            <div id="education">
                <Container className="education-container">
                    <Row>
                        <Col xs="4" className="education-title"> Education </Col>
                    </Row>
                    <Container className="education-description">
                        <Row>
                            <Col className="justify-content-left">
                                <Image className="education-uoftlogo" src="Resources/UofTLogo.Png" />
                            </Col>
                        </Row>
                        <Row> Description </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Education;