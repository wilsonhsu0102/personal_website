import React from 'react';
import '../Styles/Project.css';
import { Row, Col, Modal } from 'react-bootstrap';
import SmallProjectCarousel from './SmallProjectCarousel.jsx';
import BigProjectCarousel from './BigProjectCarousel.jsx';
import screenShot from '../Resources/Screenshot.png';
import screenShot2 from '../Resources/Screenshot2.png';
import CarouselGallery from './CarouselGallery.jsx';

const data = [
    {
        name: 'Rare Wind',
        display: 'project-main',
        color: 'black',
        image: 'Screenshot2',
        modal: {
            images: ['Screenshot2', 'Screenshot'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit. Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio. Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas. Mauris a ante in neque interdum fermentum nec non velit. Sed accumsan nisl quis quam imperdiet imperdiet. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas."
        }
    },
    {
        name: 'Saint Petersburg',
        display: 'project-right',
        color: 'blue',
        image: 'Screenshot',
        modal: {
            images: ['Screenshot2', 'Screenshot'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit. Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio. Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas. Mauris a ante in neque interdum fermentum nec non velit. Sed accumsan nisl quis quam imperdiet imperdiet. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas."
        }
    },
    {
        name: 'Deep Blue',
        display: 'project-none',
        color: 'grey',
        image: 'Screenshot',
        modal: {
            images: ['Screenshot2', 'Screenshot'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit. Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio. Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas. Mauris a ante in neque interdum fermentum nec non velit. Sed accumsan nisl quis quam imperdiet imperdiet. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas."
        }
    },
    {
        name: 'Ripe Malinka',
        display: 'project-none',
        color: 'pink',
        image: 'Screenshot',
        modal: {
            images: ['Screenshot2', 'Screenshot'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit. Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio. Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas. Mauris a ante in neque interdum fermentum nec non velit. Sed accumsan nisl quis quam imperdiet imperdiet. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas."
        }
    },
    {
        name: 'Near Moon',
        display: 'project-left',
        color: 'green',
        image: 'Screenshot',
        modal: {
            images: ['Screenshot2', 'Screenshot'],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit. Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio. Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas. Mauris a ante in neque interdum fermentum nec non velit. Sed accumsan nisl quis quam imperdiet imperdiet. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas."
        }
    }
]

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenWidth: window.innerWidth,
            modalShow: false,
            currentSlideIdx: 0,
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

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    resize = () => this.setState({ screenWidth: window.innerWidth })

    handleClose = () => this.setState({ modalShow: false });

    handleShow = (idx) => {
        this.setState({
            modalShow: true,
            currentSlideIdx: idx
        });
    }

    slideChange = (idx) => {
        this.setState({ currentSlideIdx: idx });
    }

    render() {
        let carousel = this.state.screenWidth < 768 ? <SmallProjectCarousel data={this.state.data} startIdx={this.state.currentSlideIdx} showModal={this.handleShow} slideChange={this.slideChange} /> : <BigProjectCarousel data={this.state.data} startIdx={this.state.currentSlideIdx} showModal={this.handleShow} slideChange={this.slideChange} />
        let displayElement = this.state.data[this.state.currentSlideIdx]
        let modal =
            (<Modal size="md" show={this.state.modalShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{displayElement.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CarouselGallery images={displayElement.modal.images} />
                    <div>
                        {displayElement.modal.description}
                    </div>
                </Modal.Body>
            </Modal>)
        return (
            <div id="project">
                <Row className="justify-content-center project-title">
                    <Col xs={{ offset: 0 }} md={{ offset: 1 }}> <div className="title-horizontal-right"> </div> </Col>
                    <Col xs="auto" className="education-title"> Project </Col>
                    <Col> <div className="title-horizontal-left"> </div> </Col>
                    <Col xs="0" md="1"></Col>
                </Row>
                <Row className="project-carousel" noGutters={true}>
                    {carousel}
                    {modal}
                </Row>
            </div>);
    }
}

export default Project;