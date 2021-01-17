import React from 'react';
import '../Styles/Welcome.css'
import Typed from "react-typed";

class Welcome extends React.Component {
    render() {
        return (
            <div id="welcome">
                <div className="center">
                    <div className="welcome-text">Hi, I am Wilson Hsu</div>
                    <Typed
                        className="looped-text"
                        strings={["I'm a software developer.", "I'm based in Toronto."]}
                        typeSpeed={60}
                        backSpeed={30}
                        backDelay={500}
                        loop
                    />
                </div>
                {/* <Button className="center" variant="dark"> Get to Know Me! </Button> */}
            </div>
        );
    }
}

export default Welcome;