import React from 'react';
import '../Styles/AboutMe.css'
import { Image, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

class AboutMe extends React.Component {
    render() {
        return (
            <div id="about">
                <Row className="info-box justify-content-center">
                    <Col xs="12" md="3">
                        <Row><Image className="profile-pic" src="Resources/Profile.Png" roundedCircle /></Row>
                        <Row>
                            <Col className="icon icon-first-row" xs="3" md="6"><a href="#" className="icon-effect"> <FontAwesomeIcon icon={faInstagram} size="2x" /> </a></Col>
                            <Col className="icon icon-first-row" xs="3" md="6"><a href="#" className="icon-effect"> <FontAwesomeIcon icon={faFacebookF} size="2x" /> </a></Col>
                            <Col className="icon" xs="3" md="6"><a href="#" className="icon-effect"> <FontAwesomeIcon icon={faLinkedinIn} size="2x" /> </a></Col>
                            <Col className="icon" xs="3" md="6"><a href="#" className="icon-effect"> <FontAwesomeIcon icon={faGithub} size="2x" /> </a></Col>
                        </Row>
                    </Col>
                    <Col className="descriptions" xs="12" md={{offset: 1, span: 8}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit.
                        Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio.
                        Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend
                        feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec
                        sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra
                        ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida. Etiam in
                        viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas. Mauris a ante in
                        neque interdum fermentum nec non velit. Sed accumsan nisl quis quam imperdiet imperdiet.
                        Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas.
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AboutMe;