import React from 'react';
import '../Styles/Skill.css';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap'

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
                    <Row className="experience-content">
                        <Col xs={{offset: 0, span: 12}} md={{offset: 1, span: 5}}>
                            <Row className="sub-title justify-content-center">Artificial Intelligence</Row>
                            <Row className="justify-content-center description">
                                <div className="pl-blob">PyTorch</div>
                                <div className="pl-blob">Scilit-learn</div>
                                <div className="pl-blob">Keras</div>
                                <div className="pl-blob">NumPy</div>
                            </Row>
                        </Col>
                        <Col xs="12" md="5">
                            <Row className="sub-title justify-content-center">Programming Language</Row>
                            <Row className="justify-content-center description">
                                <div className="pl-blob">Python</div>
                                <div className="pl-blob">C</div>
                                <div className="pl-blob">C#</div>
                                <div className="pl-blob">SQL</div>
                                <div className="pl-blob">Javascript</div>
                                <div className="pl-blob">HTML</div>
                                <div className="pl-blob">CSS</div>
                                <div className="pl-blob">Java</div>
                                <div className="pl-blob">Dr.Racket</div>
                                <div className="pl-blob">Haskell</div>
                            </Row>
                        </Col>
                        <Col xs={{offset: 0, span: 12}} md={{offset: 1, span: 5}}>
                            <Row className="sub-title justify-content-center">Web Development</Row>
                            <Row className="justify-content-center description">
                                <div className="pl-blob">ASP.NET</div>
                                <div className="pl-blob">Entity.js</div>
                                <div className="pl-blob">React</div>
                                <div className="pl-blob">Angular.js</div>
                                <div className="pl-blob">Express.js</div>
                                <div className="pl-blob">Node.js</div>
                                <div className="pl-blob">Postman</div>
                                <div className="pl-blob">Flask</div>
                                <div className="pl-blob">Bootstrap</div>
                            </Row>
                        </Col>
                        <Col xs="12" md="5">
                            <Row className="sub-title justify-content-center">Database</Row>
                            <Row className="justify-content-center description">
                                <div className="pl-blob">SSMS</div>
                                <div className="pl-blob">MongoDB</div>
                                <div className="pl-blob">PostgreSQL</div>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="experience-content">
                        <Col xs={{ offset: 3, span: 6 }} className="border-divider"></Col>
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