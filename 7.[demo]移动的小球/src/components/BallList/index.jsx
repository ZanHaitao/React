import React, { Component } from 'react'
import { getRandom } from '../../util';
import Ball from '../Ball';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ballInfo: []
        }
        const timer = setInterval(() => {
            const info = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                xSpeed: getRandom(100, 500),
                ySpeed: getRandom(100, 500),
                bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0,255)})`
            }
            this.setState({
                ballInfo: [...this.state.ballInfo, info]
            })
            console.log(this.state.ballInfo)
            if (this.state.ballInfo.length === 10) {
                clearInterval(timer);
            }
        }, 1000)
    }

    render() {
        return (
            <>
                {this.state.ballInfo.map((item,i)=> <Ball key={i} {...item}/> )}
            </>
        )
    }
}
