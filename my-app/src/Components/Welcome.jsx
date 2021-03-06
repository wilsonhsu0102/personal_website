import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Welcome.css'
import { scroller } from 'react-scroll';
import Typed from "react-typed";

// Two problem, we cannot use the import svg and canvas size.
class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flash: 1
        }
        this.content = this.props.content
    }

    componentDidMount() {
        this.flash = setInterval(() => {
            this.setState({
                flash: this.state.flash === 3 ? 1 : this.state.flash + 1
            })
        }, 400)
    }

    componentWillUnmount() {
        clearInterval(this.flash);
    }
    
    render() {
        let styleList = []
        for (let i = 1; i < 4; i++) {
            if (i === this.state.flash) {
                styleList.push({ color: 'black' })
            } else {
                styleList.push({ color: 'transparent' })
            }
        }
        return (
            <div id={this.content.id}>
                <div className="welcome-center">
                    <div className="welcome-text">Hi, I am</div>
                    <div className="welcome-text">&nbsp;Wilson Hsu</div>
                    <div className="welcome-line"></div>
                    <Typed
                        className="welcome-looped-text"
                        strings={this.content.typedText}
                        typeSpeed={80}
                        backSpeed={30}
                        backDelay={500}
                        loop
                    />
                </div>
                <Button className="welcome-btn" onClick={() => scroller.scrollTo('about', {
                    smooth: true,
                    duration: 700,
                })}>
                    <div className="welcome-start">Start</div>
                    <FontAwesomeIcon className="welcome-svg" style={styleList[0]} icon={faChevronDown} size="1x" />
                    <FontAwesomeIcon className="welcome-svg" style={styleList[1]} icon={faChevronDown} size="1x" />
                </Button>
            </div>
        );
    }
}

export default Welcome;