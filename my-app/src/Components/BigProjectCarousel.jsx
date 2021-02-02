import React from 'react';
import { Image } from 'react-bootstrap';
import '../Styles/CarouselGallery.css'
import { Spring, animated } from 'react-spring/renderprops';

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
        opacity: 0.5
    },
    'project-right': {
        width: '25%',
        top: "50%",
        left: "87.5%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        opacity: 0.5
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

class BigProjectCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.dataSize = this.props.data.length;
        this.state = {
            main: this.props.startIdx,
            left: this.props.startIdx - 1 < 0 ? this.dataSize - 1 : this.props.startIdx - 1,
            right: this.props.startIdx + 1 === this.dataSize ? 0 : this.props.startIdx + 1,
            data: this.props.data
        }
    }

    componentDidMount() {
        this.autoSpin = setInterval(() => {
            this.spinLeft()
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.autoSpin)
    }

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

            if (i - 1 === this.state.right || (i === 0 && this.dataSize - 1 === this.state.right)) {
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
        this.props.slideChange(lastRight)
        clearInterval(this.autoSpin)
        this.autoSpin = setInterval(() => {
            this.spinLeft()
        }, 5000)
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

            if (i + 1 === this.state.left || (i === this.dataSize - 1 && 0 === this.state.left)) {
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
        this.props.slideChange(lastLeft)
        clearInterval(this.autoSpin)
        this.autoSpin = setInterval(() => {
            this.spinLeft()
        }, 5000)
    }

    showModal = (idx) => {
        this.props.showModal(idx);
    }

    render() {
        let carousel = this.state.data.map((d, i) => {
            let nextPos;
            let clickFunc;
            if (i === this.state.main) {
                nextPos = position["project-main"];
            } else if (i === this.state.left) {
                nextPos = position["project-left"];
                clickFunc = this.spinRight
            } else if (i === this.state.right) {
                nextPos = position["project-right"];
                clickFunc = this.spinLeft
            } else {
                nextPos = position["project-none"];
            }
            return (
                <Spring key={i} config={customConfig} to={nextPos}>
                    {props => (
                        <animated.div className={"project-item " + d.display} style={props} onClick={i === this.state.main ? () => this.props.showModal(i) : clickFunc}>
                            <Image className="project-item-image" src={d.image} />
                            <div className="carousel-text" style={i !== this.state.main ? {backgroundColor: 'rgb(169, 169, 169)'} : {}}>
                                {d.name}, {d.display}
                            </div>
                        </animated.div>
                    )}
                </Spring>)
        })
        return (
            <div className="desktop-project-carousel">
                {carousel}
            </div>);
    }
}

export default BigProjectCarousel;