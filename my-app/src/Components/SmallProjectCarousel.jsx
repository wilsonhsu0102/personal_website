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
                    <Carousel.Caption className="carousel-text">
                        {d.name}
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
        return (
            <div className="project-mobile-carousel">
                <Carousel activeIndex={this.props.displayIdx} prevIcon={<FontAwesomeIcon className="carousel-pointer" icon={faAngleLeft} size="3x" />}
                    nextIcon={<FontAwesomeIcon className="carousel-pointer" icon={faAngleRight} size="3x" />}>
                    {carouselItems}
                </Carousel>
            </div>
        );
    }
}

export default SmallProjectCarousel;