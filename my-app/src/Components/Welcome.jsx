import React from 'react';
import '../Styles/Welcome.css'
import Background from '../Resources/toronto.jpg';
import { Button, Image, Row, Col} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

class Welcome extends React.Component {
    render() {
        return (
            <div id="welcome">
                {/* <div className="video-wrapper">
                    <ReactPlayer className="welcome-video" loop muted playing width="100vw" height="100%" url="Resources/WelcomePage.mp4" />
                </div> */}
                {/* <Image className="toronto" src="Resources/toronto.jpg" /> */}
                <div className="center"> 
                    <h1> Hi, I am Wilson. </h1> 
                    <Row className="justify-content-md-center"> 
                        <Col><a href="#" className="icon-effect"> <FontAwesomeIcon icon={faInstagram} size="2x" /> </a></Col>
                        <Col><a href="#" className="icon-effect"> <FontAwesomeIcon icon={faFacebookF} size="2x" /> </a></Col>
                        <Col><a href="#" className="icon-effect"> <FontAwesomeIcon icon={faLinkedinIn} size="2x" /> </a></Col>
                        <Col><a href="#" className="icon-effect"> <FontAwesomeIcon icon={faGithub} size="2x"/> </a></Col>
                    </Row>
                </div>
                {/* <Button className="center" variant="dark"> Get to Know Me! </Button> */}
            </div>
        );
    }
}

export default Welcome;