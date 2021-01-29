import React from 'react';
import '../Styles/Project.css'
import { Image, Container, Row, Col } from 'react-bootstrap'

class Project extends React.Component {
    render() {
        return (
            <div id="project">
                <Container className="experience-container">
                    <Row className="justify-content-center">
                        <Col xs={{offset: 0}} md={{offset: 1}}> <div className="experience-horizontal-line"> </div> </Col>
                        <Col xs="auto" className="experience-title"> Projects </Col>
                        <Col> <div className="experience-horizontal-line"> </div> </Col>
                        <Col xs="0" md="1"></Col>
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
                    <Col xs={{ offset: 3, span: 6 }} className="experience-border-divider"></Col>
                    </Row>
                </Container>
            </div>);
    }
}

export default Project;