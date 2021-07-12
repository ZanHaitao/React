import React, { Component } from 'react'
import RadioBoxGroup from './index';

export default class Test extends Component {
    state = {
        chooseLoves: '',
        loves: [
            { value: 'lanqiu', text: '篮球' },
            { value: 'zhuqiu', text: '足球' },
            { value: 'movie', text: '电影' }
        ],
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div>
                <RadioBoxGroup datas={this.state.loves} name="chooseLoves" choose={this.state.chooseLoves} onChange={this.handleChange} />
            </div>
        )
    }
}
