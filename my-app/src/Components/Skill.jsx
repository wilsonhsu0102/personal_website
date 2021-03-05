import React from 'react';
import '../Styles/Skill.css';
import { Container, Row, Col } from 'react-bootstrap'

class Skill extends React.Component {
    constructor(props) {
        super(props)
        this.content = this.props.content
    }
    render() {
        let skills = this.content.skills.map((skill, i) => {
            let colStyleXS = "12"
            let colStyleMD = "5"
            let colClass = "skill-bottom-row"
            if (i % 2 === 1) {
                colStyleXS = { offset: 0, span: 12 }
                colStyleMD = { offset: 1, span: 5 }
            }
            if (i === 0) {
                colClass = ""
            } else if (i === 1) {
                colClass = "skill-first-row-2"
            }
            return (
                <Col key={skill.category} className={colClass} xs={colStyleXS} md={colStyleMD}>
                    <Row className="sub-title justify-content-center">
                        <Col xs="12">
                            {skill.category}
                        </Col>
                        <Col xs="12">
                            <div className="skill-title-bar"></div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center skill-blob-row description">
                        {skill.tools.map((tool) => {
                            return (
                                <div key={tool} className="skill-blob">{tool}</div>
                            );
                        })}
                    </Row>
                </Col>
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
                    <Row className="experience-content justify-content-center">
                        {skills}
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