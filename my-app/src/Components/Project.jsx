import React from 'react';
import '../Styles/Project.css';
import { Image, Container, Row, Col, ThemeProvider } from 'react-bootstrap';
import { Spring, animated, config } from 'react-spring/renderprops';
import screenShot from '../Resources/Screenshot.png';
import List from './project_carousel.jsx';


const data = [
    {
        name: 'Rare Wind',
        color: 'black',
        image: screenShot
    },
    {
        name: 'Saint Petersburg',
        color: 'blue',
        image: screenShot
    },
    {
        name: 'Deep Blue',
        color: 'grey',
        image: screenShot
    },
    {
        name: 'Ripe Malinka',
        color: 'pink',
        image: screenShot
    },
    {
        name: 'Near Moon',
        color: 'green',
        image: screenShot
    }
]

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: data }
    }

    switch = () => {
        let tmp = this.state.data;
        tmp.push(tmp.shift())
        this.setState({ data: tmp })
    }

    render() {
        let springs = this.state.data.map((d, i) => {
            return (<Col>
                <Spring config={config.slow} from={{ width: i * 20 }} to={{ width: (i + 1) * 50 }}>
                    {props => (
                        <animated.div className="project-item" style={{ backgroundColor: d.color, width: props.width }} onClick={this.switch}>
                            {d.name}
                        </animated.div>
                    )}
                </Spring>
            </Col>)
        })
        return (
            <div id="project">
                <div className="project-carousel">
                    <Row>
                        {springs}
                    </Row>
                </div>
            </div>);
    }
}

export default Project;