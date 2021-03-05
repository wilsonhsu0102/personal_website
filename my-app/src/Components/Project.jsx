import React from 'react';
import '../Styles/Project.css';
import { Row, Col, Modal } from 'react-bootstrap';
import SmallProjectCarousel from './SmallProjectCarousel.jsx';
import BigProjectCarousel from './BigProjectCarousel.jsx';
import CarouselGallery from './CarouselGallery.jsx';

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenWidth: window.innerWidth,
            modalShow: false,
            currentSlideIdx: 0,
            stopSpinning: false,
            data: this.props.content.projects
        }
        this.content = this.props.content
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    resize = () => {
        this.setState({ screenWidth: window.innerWidth })
    }

    handleClose = () => {
        this.setState({ modalShow: false, stopSpinning: false });
    }

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

    makeModal = () => {
        let displayElement = this.state.data[this.state.currentSlideIdx];
        let modalLinkDate = this.createDateLink(displayElement);
        return (
            <Modal className="project-modal" centered size="lg" show={this.state.modalShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="sub-title">
                        {displayElement.name}
                    </Modal.Title>
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
            </Modal>);
    }

    render() {
        let carousel = this.state.screenWidth < 768 ? <SmallProjectCarousel data={this.state.data} startIdx={this.state.currentSlideIdx} showModal={this.handleShow} slideChange={this.slideChange} stopSpinning={this.state.stopSpinning} />
            : <BigProjectCarousel data={this.state.data} startIdx={this.state.currentSlideIdx} showModal={this.handleShow} slideChange={this.slideChange} stopSpinning={this.state.stopSpinning} />
        let showPaging = this.state.screenWidth < 768 ? { display: "none" } : { display: "block" };
        let modal = this.makeModal();
        return (
            <div id={this.content.id} className="page-div">
                <Row className="justify-content-center project-title">
                    <Col xs={{ offset: 0 }} md={{ offset: 1 }}> <div className="title-horizontal-left"> </div> </Col>
                    <Col xs="auto" className="section-title">{this.content.navText}</Col>
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