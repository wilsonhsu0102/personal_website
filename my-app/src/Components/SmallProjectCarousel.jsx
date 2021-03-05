import React from 'react';
import { Image, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

class SmallProjectCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showOverlay: false
        }
    }
    displayOverlay = () => {
        this.setState({
            showOverlay: true
        })
    }
    removeOverlay = () => {
        this.setState({
            showOverlay: false
        })
    }

    render() {
        let showControls = this.props.data.length < 2 ? false : true;
        let carouselItems = this.props.data.map((d, i) => {
            return (
                <Carousel.Item key={i} onClick={() => this.props.showModal(i)}>
                    <div className="sm-carousel-item">
                        <Image
                            className="d-block w-100 sm-carousel-image"
                            src={d.image}
                        />
                        <div className="sm-carousel-overlay">
                            <div className="sm-carousel-text" >
                                {d.name}
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            )
        })
        let time;
        if (this.props.stopSpinning) {
            time = null;
        } else {
            time = 5000;
        }
        return (
            <div className="project-mobile-carousel">
                <Carousel controls={showControls} onSelect={(eventKey) => { this.props.slideChange(eventKey) }} interval={time} defaultActiveIndex={this.props.startIdx} prevIcon={<FontAwesomeIcon className="carousel-pointer" icon={faAngleLeft} size="3x" />}
                    nextIcon={<FontAwesomeIcon className="carousel-pointer" icon={faAngleRight} size="3x" />}>
                    {carouselItems}
                </Carousel>
            </div>
        );
    }
}

export default SmallProjectCarousel;