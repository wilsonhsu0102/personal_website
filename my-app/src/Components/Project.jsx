import React from 'react';
import '../Styles/Project.css';
import { Image, Modal, Button } from 'react-bootstrap';
import { Spring, animated, config } from 'react-spring/renderprops';
import screenShot from '../Resources/Screenshot.png';
import screenShot2 from '../Resources/Screenshot2.png';
import List from './project_carousel.jsx';


const data = [
    {
        name: 'Rare Wind',
        display: 'project-main',
        color: 'black',
        image: 'Screenshot2'
    },
    {
        name: 'Saint Petersburg',
        display: 'project-right',
        color: 'blue',
        image: 'Screenshot'
    },
    {
        name: 'Deep Blue',
        display: 'project-none',
        color: 'grey',
        image: 'Screenshot'
    },
    {
        name: 'Ripe Malinka',
        display: 'project-none',
        color: 'pink',
        image: 'Screenshot'
    },
    {
        name: 'Near Moon',
        display: 'project-left',
        color: 'green',
        image: 'Screenshot'
    }
]

const position = {
    'project-main': {
        width: '50%',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 3,
        opacity: 0.8
    },
    'project-left': {
        width: '25%',
        top: "50%",
        left: "12.5%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        opacity: 0.3
    },
    'project-right': {
        width: '25%',
        top: "50%",
        left: "87.5%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        opacity: 0.3
    },
    'project-none': {
        width: '20%',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 0,
        opacity: 0
    }
}

const customConfig = {
    mass: 10,
    tension: 300,
    friction: 100
}
class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            main: 0,
            left: data.length - 1,
            right: 1,
            data: data.map(d => {
                if (d.image === "Screenshot2") {
                    d.image = screenShot2
                } else if (d.image === "Screenshot") {
                    d.image = screenShot
                }
                return d
            })
        }
    }

    handleClose = () => this.setState({ modalShow: false });

    handleShow = () => this.setState({ modalShow: true });

    spinLeft = () => {
        let lastRight = this.state.right
        let lastMain = this.state.main
        let nextRight
        let tmp = this.state.data.map((d, i) => {
            if (i === this.state.main) {
                d.display = "project-left"
            } else if (i === this.state.left) {
                d.display = "project-none"
            } else if (i === this.state.right) {
                d.display = "project-main"
            }

            if (i - 1 === this.state.right || (i == 0 && data.length - 1 === this.state.right)) {
                d.display = "project-right"
                nextRight = i
            }
            return d
        });
        this.setState({
            data: tmp,
            main: lastRight,
            left: lastMain,
            right: nextRight
        })
    }

    spinRight = () => {
        let lastLeft = this.state.left
        let lastMain = this.state.main
        let nextLeft
        let tmp = this.state.data.map((d, i) => {
            if (i === this.state.main) {
                d.display = "project-right"
            } else if (i === this.state.left) {
                d.display = "project-main"
            } else if (i === this.state.right) {
                d.display = "project-none"
            }

            if (i + 1 === this.state.left || (i === data.length - 1 && 0 === this.state.left)) {
                d.display = "project-left"
                nextLeft = i
            }
            return d
        });
        this.setState({
            data: tmp,
            main: lastLeft,
            left: nextLeft,
            right: lastMain
        })
    }

    render() {
        let springs = this.state.data.map((d, i) => {
            let nextPos;
            if (i === this.state.main) {
                nextPos = position["project-main"];
                return (<Spring key={i} config={customConfig} to={nextPos}>
                    {props => (
                        <animated.div className={"project-item " + d.display} style={props} onClick={this.handleShow}>
                            <Image className="project-item-image" src={d.image} />
                            {d.name}, {d.display}
                        </animated.div>
                    )}
                </Spring>)
            } else if (i === this.state.left) {
                nextPos = position["project-left"];
                return (<Spring key={i} config={customConfig} to={nextPos}>
                    {props => (
                        <animated.div className={"project-item " + d.display} style={props} onClick={this.spinRight}>
                            <Image className="project-item-image" src={d.image} />
                            {d.name}, {d.display}
                        </animated.div>
                    )}
                </Spring>)
            } else if (i === this.state.right) {
                nextPos = position["project-right"];
                return (
                    <Spring key={i} config={customConfig} to={nextPos}>
                        {props => (
                            <animated.div className={"project-item " + d.display} style={props} onClick={this.spinLeft}>
                                <Image className="project-item-image" src={d.image} />
                                {d.name}, {d.display}
                            </animated.div>
                        )}
                    </Spring>)
            } else {
                nextPos = position["project-none"];
                return (
                    <Spring key={i} config={customConfig} to={nextPos}>
                        {props => (
                            <animated.div className={"project-item " + d.display} style={props} onClick={this.switch}>
                                <Image className="project-item-image" src={d.image} />
                                {d.name}, {d.display}
                            </animated.div>
                        )}
                    </Spring>)
            }
        })
        let modal =
            (<Modal show={this.state.modalShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{data[this.state.main].name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>)
        return (
            <div id="project">
                <div className="project-carousel">
                    {springs}
                    {modal}
                </div>
                
            </div>);
    }
}

export default Project;