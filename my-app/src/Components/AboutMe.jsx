import React from 'react';
import '../Styles/AboutMe.css'
import { Image, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

class AboutMe extends React.Component {
    render() {
        return (
            <div id="about">
                <div className="info-box">
                    <Row className="justify-content-center p-t-10">
                        <Col className="p-b-10" xs="12" md="3">
                            <Image className="profile-pic" src="Resources/Profile.Png" roundedCircle />

                        </Col>
                        <Col className="p-l-10 p-b-10" xs="12" md="9">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit.
                            Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio.
                            Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend
                            feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec
                            sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra
                            ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida. Etiam in
                            viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas. Mauris a ante in
                            neque interdum fermentum nec non velit. Sed accumsan nisl quis quam imperdiet imperdiet.
                        </Col>

                    </Row>
                    <Row>
                        <Col xs="6" md="3"><a href="#" className="icon-effect"> <FontAwesomeIcon icon={faInstagram} size="2x" /> </a></Col>
                        <Col xs="6" md="3"><a href="#" className="icon-effect"> <FontAwesomeIcon icon={faFacebookF} size="2x" /> </a></Col>
                        <Col xs="6" md="3"><a href="#" className="icon-effect"> <FontAwesomeIcon icon={faLinkedinIn} size="2x" /> </a></Col>
                        <Col xs="6" md="3"><a href="#" className="icon-effect"> <FontAwesomeIcon icon={faGithub} size="2x" /> </a></Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default AboutMe;