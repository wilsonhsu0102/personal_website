import React from 'react';
import '../Styles/AboutMe.css'
import { Image, Container, Row, Col } from 'react-bootstrap'

class AboutMe extends React.Component {
    render() {
        return (
            <div id="aboutme">
                <Container>
                    <Row className="justify-content-md-center">
                        <Image src="Resources/Profile.Png" roundedCircle />
                    </Row>
                    <Row>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eros velit.
                            Aenean id porttitor turpis. Integer sed mi pretium, sagittis augue in, commodo odio.
                            Vestibulum cursus sollicitudin sem, eu sollicitudin felis consequat nec. Etiam eleifend
                            feugiat ex sed ornare. Nam a sapien rhoncus, dignissim tellus non, interdum nisi. Donec
                            sit amet nisi aliquet, lobortis dui sed, egestas mauris. Pellentesque luctus viverra
                            ligula sit amet facilisis. Integer eu magna sit amet quam suscipit gravida. Etiam in
                            viverra dolor, ut porta magna. Ut ut urna eget quam maximus egestas. Mauris a ante in
                            neque interdum fermentum nec non velit. Sed accumsan nisl quis quam imperdiet imperdiet.
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AboutMe;