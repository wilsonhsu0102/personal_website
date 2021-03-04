import React from 'react';
import { Image, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

class CarouselGallery extends React.Component {
    render() {
        let carouselItems = this.props.images.map((img, i) => {
            return (
                <Carousel.Item key={i}>
                    <Image
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                </Carousel.Item>
            )
        })
        return (
            <Carousel animation="false" interval={null} prevIcon={<FontAwesomeIcon className="carousel-pointer" icon={faAngleLeft} size="3x" />} 
            nextIcon={<FontAwesomeIcon className="carousel-pointer" icon={faAngleRight} size="3x" />}>
                {carouselItems}
            </Carousel>);
    }
}

export default CarouselGallery;