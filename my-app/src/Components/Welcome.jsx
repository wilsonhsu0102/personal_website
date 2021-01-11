import React from 'react';
import '../Styles/Welcome.css'
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player'

class Welcome extends React.Component {
    render() {
        return (
            <div id="welcome">
                <div className="video-wrapper">
                    <ReactPlayer className="welcome-video" loop muted playing width="100vw" height="100%" url="videos/WelcomePage.mp4" />
                </div>
                <Button className="center" variant="dark"> Get to Know Me! </Button>
            </div>
        );
    }
}

export default Welcome;