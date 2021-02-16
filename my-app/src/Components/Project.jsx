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
        name: 'Neural Dependency Tree Parser',
        display: 'project-main',
        image: screenShot,
        modal: {
            images: [screenShot2, screenShot2],
            description: ["Parsed sentences into their corresponding projective dependency tree to find the grammatical relationships between the words."
                , "Implemented a feedforward-NN using PyTorch library to predict the next relation to draw."
                , "Achieved 89% accuracy on test data."]
        }
    },
    {
        name: 'EtherRide',
        display: 'project-right',
        color: 'blue',
        image: screenShot2,
        modal: {
            images: [screenShot2, screenShot2],
            description: ["Car rental app that won the Best Aragon App award at UofTHacksVI out of 100+ participating teams."
                , "Smart contract created/stored on the Ethereum Blockchain and managed using Aragon platform."
                , "Integrated SmartCar API to remotely lock/unlock smart vehicles once transactions are verified."]
        }
    },
    {
        name: 'Deep Blue',
        display: 'project-none',
        color: 'grey',
        image: screenShot2,
        modal: {
            images: [screenShot, screenShot],
            description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit. Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio. Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas. Mauris a ante in neque interdum fermentum nec non velit. Sed accumsan nisl quis quam imperdiet imperdiet. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas."]
        }
    },
    {
        name: 'Ripe Malinka',
        display: 'project-none',
        color: 'pink',
        image: screenShot,
        modal: {
            images: [screenShot2, screenShot],
            description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit. Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio. Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas. Mauris a ante in neque interdum fermentum nec non velit. Sed accumsan nisl quis quam imperdiet imperdiet. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas."]
        }
    },
    {
        name: 'Near Moon',
        display: 'project-left',
        color: 'green',
        image: screenShot2,
        modal: {
            images: [screenShot, screenShot2],
            description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit. Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio. Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas. Mauris a ante in neque interdum fermentum nec non velit. Sed accumsan nisl quis quam imperdiet imperdiet. Etiam in viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas."]
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
            stopSpinning: false,
            data: data
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    resize = () => this.setState({ screenWidth: window.innerWidth })

    handleClose = () => this.setState({ modalShow: false, stopSpinning: false });

    handleShow = (idx) => {
        this.setState({
            modalShow: true,
            currentSlideIdx: idx,
            stopSpinning: true
        });
    }

    slideChange = (idx) => {
        this.setState({ currentSlideIdx: idx });
    }

    render() {
        let carousel = this.state.screenWidth < 768 ? <SmallProjectCarousel data={this.state.data} startIdx={this.state.currentSlideIdx} showModal={this.handleShow} slideChange={this.slideChange} stopSpinning={this.state.stopSpinning} />
            : <BigProjectCarousel data={this.state.data} startIdx={this.state.currentSlideIdx} showModal={this.handleShow} slideChange={this.slideChange} stopSpinning={this.state.stopSpinning} />
        let displayElement = this.state.data[this.state.currentSlideIdx]
        let modal =
            (<Modal size="md" show={this.state.modalShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="sub-title">{displayElement.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CarouselGallery images={displayElement.modal.images} />
                    <ul>
                        {displayElement.modal.description.map((item) => {
                            return <li className="description">{item}</li>
                        })}
                    </ul>
                </Modal.Body>
            </Modal>)
        return (
            <div id="project" className="page-div">
                <Row className="justify-content-center project-title">
                    <Col xs={{ offset: 0 }} md={{ offset: 1 }}> <div className="title-horizontal-left"> </div> </Col>
                    <Col xs="auto" className="section-title"> Project </Col>
                    <Col> <div className="title-horizontal-right"> </div> </Col>
                    <Col xs="0" md="1"></Col>
                </Row>
                <Row className="project-carousel" noGutters={true}>
                    {carousel}
                    {modal}
                </Row>
                <Row className="justify-content-center project-end">
                    <Col xs={{ offset: 0 }} md={{ offset: 1 }}>
                        <div className="end-horizontal"> </div>
                    </Col>
                    <Col xs="0" md="1"></Col>
                </Row>
            </div>);
    }
}

export default Project;