import React from 'react';
import '../Styles/Experience.css'
import { Image, Container, Row, Col } from 'react-bootstrap'
import rocsautLogo from '../Resources/ROCSAUTLogo.png';
import ECCCLogo from '../Resources/ECCCLogo.png';

class Experience extends React.Component {
    // Possible upgrades in the future: Shifting whole exp-container a little to the right and add a timeline on the right side of the page.
    render() {
        return (
            <div id="experience" className="page-div">
                <Container className="experience-container">
                    <Row className="justify-content-center">
                        <Col xs={{ offset: 0 }} md={{ offset: 1 }}> <div className="title-horizontal-left"> </div> </Col>
                        <Col xs="auto" className="section-title"> Experience </Col>
                        <Col> <div className="title-horizontal-right"> </div> </Col>
                        <Col xs="0" md="1"></Col>
                    </Row>
                    <Row className="experience-content justify-content-center">
                        <Col xs="8" lg="3"><Image className="about-profile-pic" src={ECCCLogo} /></Col>
                        <Col xs="12" lg="9">
                            <Row className="justify-content-center sub-title">
                                Web Application Developer
                            </Row>
                            <Row className="justify-content-center experience-loc-time description">
                                Environment and Climate Change Canada | North York, ON | Aug. 2020 - Aug. 2021
                            </Row>
                            <Row className="experience-description description">
                                <ul>
                                    <li>
                                        Worked in an Agile team which is responsible for upgrading and maintaining several .NET MVC web applications that enforce the
                                        3 major effluent regulations in Canada.
                                    </li>
                                    <li>
                                        Wrote SQL scripts to generate test cases for performance testing, and a Windows program that
                                        cleans/convert undesirable data formats in production database.
                                    </li>
                                    <li>
                                        Designed and developed the brand new Business Application Tracker app that is used to keep track and report all resource allocations
                                        within the Business e-Solution Division.
                                    </li>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="experience-content">
                        <Col xs={{ offset: 3, span: 6 }} className="border-divider"></Col>
                    </Row>
                    <Row className="experience-content justify-content-center">
                        <Col xs="8" lg="3"><Image className="about-profile-pic" src={rocsautLogo} /></Col>
                        <Col xs="12" lg="9">
                            <Row className="justify-content-center sub-title">
                                Vice-president of Operation
                            </Row>
                            <Row className="justify-content-center experience-loc-time description">
                                Taiwan (ROC) Student Association at UofT | Toronto, ON | Mar 2019 - Apr. 2020
                            </Row>
                            <Row className="experience-description description">
                                <ul>
                                    <li>
                                        Evaluated and managed all cash flows for our student association of over 200 active members.
                                    </li>
                                    <li>
                                        Recruited and lead a team of 8 people to engage in face-to-face meetings, phone calls, emails with
                                        numerous potential sponsors.
                                    </li>
                                    <li>
                                        In charge of purchasing require items, booking locations for events and tracking inventories. 
                                    </li>
                                </ul>
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
            </div>);
    }
}

export default Experience;