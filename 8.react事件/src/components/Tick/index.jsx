import React, { Component } from 'react'

export default class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: this.props.number
        }

        const timer = setInterval(() => {
            this.setState({
                number: this.state.number - 1
            })
            if (this.state.number === 0) {
                clearInterval(timer);
                this.props.onOver() && this.props.onOver();
            }
        }, 1000)
    }

    handleClick = () => {
        this.props.onClick && this.props.onClick();
    }

    render() {
        return (
            <h1 onClick={this.handleClick}>
                倒计时结束剩余：{this.state.number}
            </h1>
        )
    }
}
