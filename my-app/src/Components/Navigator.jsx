import React from 'react';
import '../Styles/Navigator.css'

class Navigator extends React.Component {
    render() {
        return (
            <div id="navigator">
                <div className="container">
                    <div className="row">
                        <div className="col-sm"> About me </div>
                        <div className="col-sm"> Education </div>
                        <div className="col-sm"> Work Experience </div>
                        <div className="col-sm"> Project </div>
                        <div className="col-sm"> Skills </div>
                        <div className="col-sm"> Contacts </div>
                    </div>
                </div>
            </div>);
    }
}

export default Navigator;