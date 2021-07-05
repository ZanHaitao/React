import React, { Component } from 'react'
import Tick from '../Tick';

export default class index extends Component {

    state = {
        isOver: false
    }

    handleOver = () => {
        this.setState({
            isOver: true
        })
    }

    handleClick = () => {
        console.log(this);
        console.log('点击了！！！');
    }

    render() {
        let status = '倒计时进行中！'
        if(this.state.isOver){
            status = '倒计时已完成！'
        }
        return (
            <div>
                <Tick number={10} onOver={this.handleOver} onClick={this.handleClick}/>
                <p>
                    {status}
                </p>
            </div>
        )
    }
}
