import React from 'react';
import '../Styles/Education.css';
import { Image, Button, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.content = this.props.content
    }
    render() {
        let schoolInfo = this.content.school.infos.map((info, i) => {
            return (
                <Row key={"Info" + i} className="education-info">
                    <Col xs="12" lg="1" className="education-svg">
                        <FontAwesomeIcon icon={info.icon} />
                    </Col>
                    <Col xs="12" lg="auto">
                        {info.detail}
                    </Col>
                </Row>
            );
        })
        let courseButtons = this.content.courses.map((course) => {
            return (
                <Button key={course.code} className="blob-btn" onClick={() => window.open(course.link)}>
                    <div>{course.code}</div>
                    <div className="education-course-title">&nbsp;{course.title}</div>
                </Button>);
        })
        return (
            <div id={this.content.id} className="page-div">
                <Container className="education-container">
                    <Row className="justify-content-center">
                        <Col xs={{ offset: 0 }} md={{ offset: 1 }}> <div className="title-horizontal-left"> </div> </Col>
                        <Col xs="auto" className="section-title">{this.content.navText}</Col>
                        <Col> <div className="title-horizontal-right"> </div> </Col>
                        <Col xs="0" md="1"></Col>
                    </Row>
                    <Row className="experience-content justify-content-center">
                        <Col xs="12" lg="6">
                            <Image className="education-uoftlogo" src={this.content.school.logo} />
                        </Col>
                        <Col xs="12" lg="6">
                            {schoolInfo}
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
                        {courseButtons}
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