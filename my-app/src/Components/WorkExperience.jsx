import React from 'react';
import '../Styles/WorkExperience.css'
import { Image, Container, Row, Col } from 'react-bootstrap'

class WorkExperience extends React.Component {
    render() {
        return (
            <div id="experience">
                <Container className="experience-container">
                    <Row>
                        <Col xs="3" md="1"> <div className="experience-horizontal-line"> </div> </Col>
                        <Col className="experience-title" xs="6" md="auto"> Work Experience </Col>
                        <Col xs="3" md="5"> <div className="experience-horizontal-line"> </div> </Col>
                    </Row>
                    <Row className="experience-content justify-content-center">
                        <Col xs="8" md="3"><Image className="about-profile-pic" src="Resources/Profile.Png" /></Col>
                        <Col xs="12" md="9">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit.
                            Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio.
                            Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend
                            feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec
                            sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra
                            ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida.
                        </Col>
                    </Row>
                    <Row className="experience-content"> 
                    <Col xs={{ offset: 2, span: 8 }} className="experience-border-divider"></Col>
                    </Row>
                    <Row className="experience-content justify-content-center">
                        <Col xs="8" md="3"><Image className="about-profile-pic" src="Resources/Profile.Png" /></Col>
                        <Col xs="12" md="9">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit.
                            Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio.
                            Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend
                            feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec
                            sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra
                            ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida.
                        </Col>
                    </Row>
                </Container>
            </div>);
    }
}

export default WorkExperience;