import React from 'react';
import '../Styles/Project.css';
import { Row, Col, Modal } from 'react-bootstrap';
import SmallProjectCarousel from './SmallProjectCarousel.jsx';
import BigProjectCarousel from './BigProjectCarousel.jsx';
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
import LO1 from '../Resources/LO1.png';
import LO2 from '../Resources/LO2.png';
import LO5 from '../Resources/LO5.gif';
import LO6 from '../Resources/LO6.gif';
import LO7 from '../Resources/LO7.gif';
import LO8 from '../Resources/LO8.gif';
import GC1 from '../Resources/GC1.png';
import GC2 from '../Resources/GC2.png';
import CarouselGallery from './CarouselGallery.jsx';

const data = [
    {
        name: 'Personal Website',
        image: PW1,
        modal: {
            images: [PW1, PW2, PW3, PW4, PW5],
            date: "Jan. 2021",
            links: ["https://github.com/wilsonhsu0102/person_website"],
            linkDescriptions: ["Repo Link"],
            description: ["A fully responsive React website that presents part of me and the experience that I have."
                , "Built with various fun and famous frameworks such as Bootstrap, EmailJS, React-Spring, React-Particles, React-Scroll, etc."
                , "Please contact me via the \"Leave me a message\" section at the bottom of the page if you have suggestions about this website"]
        }
    },
    {
        name: 'Neural Dependency Parser',
        image: NDTP1,
        modal: {
            images: [NDTP1],
            date: "Sep. 2020",
            links: ["https://github.com/wilsonhsu0102/Computational-Linguistic/tree/master/A1"],
            linkDescriptions: ["Repo Link"],
            description: ["Made a transition-based parser that would parse a sentence into a dependency graph."
                , "Implemented a feedforward-NN using PyTorch library to predict the next projective transition to apply to the sentence parser."
                , "The model was trained in mini-batches on 39832 sentences and achieved 89.8% accuracy on 2416 test sentence."]
        }
    },
    {
        name: 'EtherRide',
        image: ER1,
        modal: {
            images: [ER1, ER2],
            date: "Jan. 2019",
            links: ["https://github.com/yuxuanyao/EtherRide", "https://devpost.com/software/etherride"],
            linkDescriptions: ["Repo Link", "DevPost Link"],
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
            links: ["https://github.com/wilsonhsu0102/UNI", "https://shrouded-oasis-64494.herokuapp.com/"],
            linkDescriptions: ["Repo Link", "Website Link"],
            description: ["A MERN web application built to help university students plan events during busy school days, shorten the distance between \"UNI\"."
                , "Users can upload pictures, customize profile and connect with others if the ❤️ is mutual."
                , "Supports account validation, administrator mode, real time chatting, event planning."]
        }
    },
    {
        name: 'LiftOvers',
        image: LO1,
        modal: {
            images: [LO1, LO2, LO5, LO6, LO7, LO8],
            date: "Nov. 2019",
            links: [],
            linkDescriptions: [],
            description: ["Designed, developed and delivered a management web application for a NPO named LiftOvers, who's main goal is to reduce food waste around the Toronto region."
                , "The purpose of the application is to create an automated solution that would cut down the human resource expenditure on processing lift requests and recording keeping purposes."
                , "Functionality includes: User validation, Administrator access, Twilio integration, Lift request confirmations and tracking, User information updates."]
        }
    },
    {
        name: 'Game Centre',
        image: GC1,
        modal: {
            images: [GC1, GC2],
            date: "Oct. 2017",
            links: ["https://github.com/wilsonhsu0102/minimax_puzzle_solver"],
            linkDescriptions: ["Repo link"],
            description: ["A game centre console app that consist of two basic games: Subtract Square, Stone Henge",
                "User can choose to play against AI player that is implemented with minimax algorithm."]
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
        this.content = this.props.content
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

    createDateLink = (displayElement) => {
        let dateLink = [<div key="date">{displayElement.modal.date}</div>]
        for (let i = 0; i < displayElement.modal.links.length; i++) {
            dateLink.push(<div key={"linkDivider" + i.toString()}>&nbsp;|&nbsp;</div>)
            dateLink.push(<a key={"link" + i.toString()} href={displayElement.modal.links[i]} rel="noreferrer" target="_blank">{displayElement.modal.linkDescriptions[i]}</a>)
        }
        return dateLink
    }

    render() {
        let carousel = this.state.screenWidth < 768 ? <SmallProjectCarousel data={this.state.data} startIdx={this.state.currentSlideIdx} showModal={this.handleShow} slideChange={this.slideChange} stopSpinning={this.state.stopSpinning} />
            : <BigProjectCarousel data={this.state.data} startIdx={this.state.currentSlideIdx} showModal={this.handleShow} slideChange={this.slideChange} stopSpinning={this.state.stopSpinning} />
        let displayElement = this.state.data[this.state.currentSlideIdx]
        let modalLinkDate = this.createDateLink(displayElement);
        let showPaging = this.state.screenWidth < 768 ? { display: "none" } : { display: "block" };
        let modal =
            (<Modal className="project-modal" centered size="lg" show={this.state.modalShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="sub-title">{displayElement.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-carousel-container">
                        <CarouselGallery images={displayElement.modal.images} />
                    </div>
                    <Row className="description modal-date-link justify-content-center">
                        {modalLinkDate}
                    </Row>
                    <div className="modal-divider"></div>
                    <ul>
                        {displayElement.modal.description.map((item, i) => {
                            return <li key={"modalDescription" + i} className="description">{item}</li>
                        })}
                    </ul>
                </Modal.Body>
            </Modal>)
        return (
            <div id={this.content.id} className="page-div">
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
                <Row className="big-carousel-paging description" style={showPaging}>
                    &#8226;&#8226;&nbsp;{this.state.currentSlideIdx + 1}/{this.state.data.length}&nbsp;&#8226;&#8226;
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