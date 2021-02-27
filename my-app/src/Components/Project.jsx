import React from 'react';
import '../Styles/Project.css';
import { Row, Col, Modal } from 'react-bootstrap';
import SmallProjectCarousel from './SmallProjectCarousel.jsx';
import BigProjectCarousel from './BigProjectCarousel.jsx';
import screenShot from '../Resources/Screenshot.png';
import screenShot2 from '../Resources/Screenshot2.png';
import NDTP1 from '../Resources/NDTP1.png';
import ER1 from '../Resources/ER1.png';
import ER2 from '../Resources/ER2.jpg';
import UNI1 from '../Resources/UNI1.png';
import UNI2 from '../Resources/UNI2.png';
import UNI3 from '../Resources/UNI3.png';
import UNI4 from '../Resources/UNI4.png';
import PW1 from '../Resources/PW1.png';
import PW2 from '../Resources/PW2.png';
import PW3 from '../Resources/PW3.png';
import PW4 from '../Resources/PW4.png';
import PW5 from '../Resources/PW5.png';
import CarouselGallery from './CarouselGallery.jsx';

const data = [
    {
        name: 'Neural Dependency Tree Parser',
        image: NDTP1,
        modal: {
            images: [NDTP1],
            date: "Sep. 2020",
            link1: "https://github.com/wilsonhsu0102/Computational-Linguistic/tree/master/A1",
            link1Description: "Repo Link",
            link2: "",
            link2Description: "",
            description: ["Parsed sentences into their corresponding projective dependency tree to find the grammatical relationships between the words."
                , "Implemented a feedforward-NN using PyTorch library to predict the next relation to draw."
                , "Achieved 89% accuracy on test data."]
        }
    },
    {
        name: 'EtherRide',
        image: ER1,
        modal: {
            images: [ER1, ER2],
            date: "Jan. 2019",
            link1: "https://github.com/yuxuanyao/EtherRide",
            link1Description: "Repo Link",
            link2: "https://devpost.com/software/etherride",
            link2Description: "DevPost Link",
            description: ["Car rental app that won the Best Aragon App award at UofTHacksVI out of 100+ participating teams."
                , "Smart contract created/stored on the Ethereum Blockchain and managed using Aragon platform."
                , "Integrated SmartCar API to remotely lock/unlock smart vehicles once transactions are verified."]
        }
    },
    {
        name: 'UNI',
        image: UNI2,
        modal: {
            images: [UNI1, UNI2, UNI3, UNI4],
            date: "Nov. 2019",
            link1: "https://github.com/wilsonhsu0102/UNI",
            link1Description: "Repo Link",
            link2: "https://shrouded-oasis-64494.herokuapp.com/",
            link2Description: "Website Link",
            description: ["A MERN web application built to help university students plan events during busy school days, shorten the distance between \"UNI\"."
                , "Users can upload pictures, customize profile and connect with others if the ❤️ is mutual."
                , "Supports account validation, administrator mode, real time chatting, event planning."]
        }
    },
    {
        name: 'Personal Website',
        image: PW1,
        modal: {
            images: [PW1, PW2, PW3, PW4, PW5],
            date: "Jan. 2021",
            link1: "https://github.com/wilsonhsu0102/person_website",
            link1Description: "Repo Link",
            link2: "",
            link2Description: "",
            description: ["A fully responsive React website that presents part of me and the experience that I have."
                , "Built with various fun and famous frameworks such as Bootstrap, EmailJS, React-Spring, React-Particles, React-Scroll, etc."
                , "Please contact me via the \"Leave me a message\" section at the bottom of the page if you have suggestions about this website"]
        }
    },
    {
        name: 'Near Moon',
        image: screenShot2,
        modal: {
            images: [screenShot, screenShot2],
            date: "Sep. 2020",
            link1: "https://github.com/wilsonhsu0102/Computational-Linguistic/tree/master/A1",
            link1Description: "Repo Link",
            link2: "",
            link2Description: "",
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
        let modalLinkDate;
        if (displayElement.modal.link2 !== "") {
            modalLinkDate =
                (<Row className="description modal-date-link justify-content-center">
                    {displayElement.modal.date} | <a className="modal-link" href={displayElement.modal.link1} rel="noreferrer" target="_blank">{displayElement.modal.link1Description}</a>&nbsp;&nbsp;| <a className="modal-link" href={displayElement.modal.link2} rel="noreferrer" target="_blank">{displayElement.modal.link2Description}</a>
                </Row>)
        } else {
            modalLinkDate =
                (<Row className="description modal-date-link justify-content-center">
                    {displayElement.modal.date} | <a className="modal-link" href={displayElement.modal.link1} rel="noreferrer" target="_blank">{displayElement.modal.link1Description}</a>
                </Row>)
        }

        let modal =
            (<Modal className="project-modal" centered size="lg" show={this.state.modalShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="sub-title">{displayElement.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-carousel-container">
                        <CarouselGallery images={displayElement.modal.images} />
                    </div>
                    {modalLinkDate}
                    <div className="modal-divider"></div>
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