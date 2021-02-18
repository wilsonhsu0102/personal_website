import React from 'react';
import '../Styles/Skill.css';
import { Container, Row, Col } from 'react-bootstrap'

class Skill extends React.Component {
    render() {
        return (
            <div id="skill" className="page-div">
                <Container className="experience-container">
                    <Row className="justify-content-center">
                        <Col xs={{ offset: 0 }} md={{ offset: 1 }}> <div className="title-horizontal-left"> </div> </Col>
                        <Col xs="auto" className="section-title"> Skill </Col>
                        <Col> <div className="title-horizontal-right"> </div> </Col>
                        <Col xs="0" md="1"></Col>
                    </Row>
                    <Row className="experience-content justify-content-center">
                        <Col className="skill-content" xs="12" md="5">
                            <Row className="sub-title justify-content-center">
                                <Col xs="12">
                                    Artificial Intelligence
                                </Col>
                                <Col xs="12">
                                    <div className="skill-title-bar"></div>
                                </Col>
                            </Row>
                            <Row className="justify-content-center skill-blob-row description">
                                <div className="skill-blob">PyTorch</div>
                                <div className="skill-blob">Scikit-learn</div>
                                <div className="skill-blob">Keras</div>
                                <div className="skill-blob">NumPy</div>
                            </Row>
                        </Col>
                        <Col className="skill-first-row-2" xs={{ offset: 0, span: 12 }} md={{ offset: 1, span: 5 }}>
                            <Row className="sub-title justify-content-center">
                                <Col xs="12">
                                    Programming Language
                                </Col>
                                <Col xs="12">
                                    <div className="skill-title-bar"></div>
                                </Col>
                            </Row>
                            <Row className="justify-content-center skill-blob-row description">
                                <div className="skill-blob">Python</div>
                                <div className="skill-blob">C</div>
                                <div className="skill-blob">C#</div>
                                <div className="skill-blob">SQL</div>
                                <div className="skill-blob">Javascript</div>
                                <div className="skill-blob">HTML</div>
                                <div className="skill-blob">CSS</div>
                                <div className="skill-blob">Java</div>
                                <div className="skill-blob">Dr.Racket</div>
                                <div className="skill-blob">Haskell</div>
                            </Row>
                        </Col>
                        <Col className="skill-second-row" xs="12" md="5">
                            <Row className="sub-title justify-content-center">
                                <Col xs="12">
                                    Web Development
                                </Col>
                                <Col xs="12">
                                    <div className="skill-title-bar"></div>
                                </Col>
                            </Row>
                            <Row className="justify-content-center skill-blob-row description">
                                <div className="skill-blob">ASP.NET</div>
                                <div className="skill-blob">Blazor</div>
                                <div className="skill-blob">Entity.js</div>
                                <div className="skill-blob">React</div>
                                <div className="skill-blob">Angular.js</div>
                                <div className="skill-blob">Express.js</div>
                                <div className="skill-blob">Node.js</div>
                                <div className="skill-blob">Postman</div>
                                <div className="skill-blob">Flask</div>
                                <div className="skill-blob">Bootstrap</div>
                            </Row>
                        </Col>
                        <Col className="skill-second-row" xs={{ offset: 0, span: 12 }} md={{ offset: 1, span: 5 }}>
                            <Row className="sub-title justify-content-center">
                                <Col xs="12">
                                    Database
                                </Col>
                                <Col xs="12">
                                    <div className="skill-title-bar"></div>
                                </Col>
                            </Row>
                            <Row className="justify-content-center skill-blob-row description">
                                <div className="skill-blob">SSMS</div>
                                <div className="skill-blob">MongoDB</div>
                                <div className="skill-blob">PostgreSQL</div>
                            </Row>
                        </Col>
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

export default Skill;