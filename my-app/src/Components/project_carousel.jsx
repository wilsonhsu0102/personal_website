import React from 'react'
import { Spring, animated, config } from 'react-spring/renderprops';



export default class List extends React.Component {
    state = { y: 0 }
    el = React.createRef()
    spring = React.createRef()
    setY = () => this.setState({ y: Math.round(Math.random() * 750) + 50 })
    // User interaction should stop animation in order to prevent scroll-hijacking
    // Doing this on onWheel isn't enough, but just to illustrate ...
    stop = () => this.spring.current.stop()
    render() {
        const y = this.el.current ? this.el.current.scrollTop : 0
        return (
            <div className="withold">

                <div className="scrolltop-b" onClick={this.setY} />
            </div>
        )
    }
}