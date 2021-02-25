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
            flash: 1,
            welcomeTextStyle: { textShadow: '5px 1px 5px rgba(0, 0, 0, 0.7)' },
            welcomeBoxStyle: { boxShadow: '5px 0px 5px rgba(0, 0, 0, 0.7)' }
        }
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

    changeOriginal = () => {
        this.setState({
            welcomeTextStyle: { textShadow: '5px 1px 5px rgba(0, 0, 0, 0.7)' },
            welcomeBoxStyle: { boxShadow: '5px 0px 5px rgba(0, 0, 0, 0.7)' }
        })
    }

    changeRed = () => {
        this.setState({
            welcomeTextStyle: { textShadow: '5px 1px 5px rgba(255, 37, 37, 1)' },
            welcomeBoxStyle: { boxShadow: '5px 0px 5px rgba(255, 37, 37, 1)' }
        })
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
            <div id="welcome">
                <div className="welcome-center">
                    <div className="welcome-text" style={this.state.welcomeTextStyle}>Hi, I am Wilson Hsu</div>
                    <div className="welcome-line" style={this.state.welcomeBoxStyle}></div>
                    <Typed
                        className="welcome-looped-text"
                        style={this.state.welcomeTextStyle}
                        strings={["I'm a software developer.", "I'm based in Toronto."]}
                        typeSpeed={80}
                        backSpeed={30}
                        backDelay={500}
                        loop
                    />
                    <div class="dec_1 text-dec"></div>
                    <div class="dec_2 text-dec"></div>
                    <div class="dec_3 text-dec"></div>
                    <div class="dec_4 text-dec"></div>
                    <div class="dec_5 text-dec"></div>
                    <div class="dec_6 text-dec"></div>
                    <div class="dec_7 text-dec"></div>
                </div>
                <Button className="welcome-btn" onMouseEnter={this.changeRed} onMouseLeave={this.changeOriginal} onClick={() => scroller.scrollTo('about', {
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