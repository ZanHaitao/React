import React, { Component } from 'react'

export default class Comp extends Component {
    state = {
        n: 0
    }

    handleClick = () => {
        this.setState((prev)=>({
            n: prev.n + 1
        }))
        this.setState((prev)=>({
            n: prev.n + 1
        }))
        this.setState((prev)=>({
            n: prev.n + 1
        }))
    }

    render() {
        return (
            <div>
                <p>{this.state.n}</p>
                <p><button onClick={this.handleClick}>+</button></p>
            </div>
        )
    }
}
