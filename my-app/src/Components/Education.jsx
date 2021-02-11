import React from 'react';
import '../Styles/Education.css';
import { Image, Container, Row, Col } from 'react-bootstrap'
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
                    <Container className="education-description">
                        <Row>
                            <Col xs="12">
                                <Image className="education-uoftlogo" src={UofTLogo} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit.
                                Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio.
                                Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend
                                feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec
                                sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra
                                ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida.
                            </Col>
                        </Row>
                    </Container>
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