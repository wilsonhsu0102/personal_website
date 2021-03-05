import React from 'react';
import '../Styles/Experience.css'
import { Image, Container, Row, Col } from 'react-bootstrap'

class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.content = this.props.content
    }
    // Possible upgrades in the future: Shifting whole exp-container a little to the right and add a timeline on the right side of the page.
    render() {
        let experiences = this.content.experiences.map((exp, i) => {
            return (
                <Row key={"experience" + i} className="experience-content justify-content-center">
                    <Col xs="12" lg="3"><Image className="experience-logo education-uoftlogo" src={exp.companyLogo} /></Col>
                    <Col xs="12" lg="9">
                        <Row className="justify-content-center sub-title">
                            <Col xs="12">
                                {exp.title}
                            </Col>
                            <Col xs="12">
                                <div className="skill-title-bar"></div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center experience-loc-time description">
                            {exp.brief}
                        </Row>
                        <Row className="experience-description description">
                            <ul>
                                {exp.details.map((detail, j) => {
                                    return (
                                        <li key={"details" + j}>
                                            {detail}
                                        </li>
                                    );
                                })}
                            </ul>
                        </Row>
                    </Col>
                </Row>
            );
        })
        return (
            <div id={this.content.id} className="page-div">
                <Container className="experience-container">
                    <Row className="justify-content-center">
                        <Col xs={{ offset: 0 }} md={{ offset: 1 }}> <div className="title-horizontal-left"> </div> </Col>
                        <Col xs="auto" className="section-title">{this.content.navText}</Col>
                        <Col> <div className="title-horizontal-right"> </div> </Col>
                        <Col xs="0" md="1"></Col>
                    </Row>
                    {experiences}
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