import React, { Component } from 'react'
import './index.css'
/**
 * 小球组件
 */
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: this.props.left || 0,
            top: this.props.top || 0,
            xSpeed: this.props.xSpeed,
            ySpeed: this.props.ySpeed
        }
        const duration = 16;
        setInterval(() => {
            const xDis = this.state.xSpeed * duration / 1000;
            const yDis = this.state.ySpeed * duration / 1000;
            let newLeft = xDis + this.state.left;
            let newTop = yDis + this.state.top;
            if (newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            } else if (newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }
            if (newTop <= 0) {
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            } else if (newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }
            this.setState({
                left:newLeft,
                top:newTop
            })
        }, duration)
    }

    render() {
        return (
            <div className="ball" style={{
                left: this.state.left,
                top: this.state.top,
                backgroundColor: this.props.bg || '#f40'
            }}>
            </div>
        )
    }
}
