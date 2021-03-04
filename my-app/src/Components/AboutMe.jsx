import React from 'react';
import '../Styles/AboutMe.css';
import ParticlesConfig from '../Resources/about-particle-config.json';
import { Button, Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Particles from 'react-particles-js';

class AboutMe extends React.Component {
    constructor(props) {
        super(props)
        this.content = this.props.content
        this.links = this.props.links
        this.state = {
            profileIdx: 0
        }
    }

    changeProfile = () => {
        this.setState({
            profileIdx: this.state.profileIdx === this.content.profileImgs.length - 1 ? 0 : this.state.profileIdx + 1 
        })
    }

    render() {
        let contactLinks = this.links.map((link) => {
            return (
                <Col className="about-icon" xs="4" key={link.name}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="about-icon-effect">
                        <FontAwesomeIcon className="svg-link" icon={link.icon} size="2x" />
                    </a>
                </Col>
            );
        })
        let profileImg = this.content.profileImgs[this.state.profileIdx]
        return (
            <div id={this.content.id}>
                <div className="particle-div">
                    <Particles
                        className="particle-bg"
                        canvasClassName="particle-behind"
                        params={ParticlesConfig} />
                </div>
                <div className="page-div">
                    <Row className="about-info-box justify-content-center">
                        <Col className="about-title-row" xs={{ span: 12 }}><div className="section-title about-title">{this.content.title}</div></Col>
                        <Col xs={{ span: 12 }} md={{ span: 3 }}>
                            <Row><Image className="about-profile-pic" src={profileImg} roundedCircle onClick={this.changeProfile}/></Row>
                            <Row>
                                {contactLinks}
                            </Row>
                        </Col>
                        <Col xs={{ span: 12 }} md={{ offset: 1, span: 8 }}>
                            <Row>
                                <Col className="about-descriptions description" xs={{ span: 12, order: 2 }} md={{ span: 12, order: 1 }} dangerouslySetInnerHTML= { {__html: this.content.description} }>
                                </Col>
                                <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 2 }} className="about-resume justify-content-center">
                                    <Button className="about-resume-btn description" href={this.content.resume} download>
                                        <div className="about-resume-text">Download Resume</div>
                                        <FontAwesomeIcon className="about-resume-svg description" icon={faDownload} />
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </div>
        );
    }
}

export default AboutMe;