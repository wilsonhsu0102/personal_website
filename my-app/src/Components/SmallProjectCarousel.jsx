import React from 'react';
import { Image, Carousel } from 'react-bootstrap';
import '../Styles/CarouselGallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

class SmallProjectCarousel extends React.Component {

    render() {
        let carouselItems = this.props.data.map((d, i) => {
            return (
                <Carousel.Item key={i} onClick={() => this.props.showModal(i)}>
                    <Image
                        className="d-block w-100 sm-carousel-image"
                        src={d.image}
                    />
                    <Carousel.Caption className="carousel-text description">
                        {d.name}
                    </Carousel.Caption>
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
                <Carousel onSelect={(eventKey) => {this.props.slideChange(eventKey)}} interval={time} defaultActiveIndex={this.props.startIdx} prevIcon={<FontAwesomeIcon className="carousel-pointer" icon={faAngleLeft} size="3x" />}
                    nextIcon={<FontAwesomeIcon className="carousel-pointer" icon={faAngleRight} size="3x" />}>
                    {carouselItems}
                </Carousel>
            </div>
        );
    }
}

export default SmallProjectCarousel;