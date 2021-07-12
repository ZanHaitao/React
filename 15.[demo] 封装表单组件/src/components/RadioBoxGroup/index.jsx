import React, { Component } from 'react'

export default class index extends Component {

    getRadioBoxs() {
        return this.props.datas.map(it => (<label key={it.value}>
            <input type="radio" value={it.value} name={this.props.name} onChange={(e) => {
                this.props.onChange(e);
            }} checked={this.props.choose === it.value} />
            {it.text}
        </label>))
    }

    render() {
        return (
            <>
                {this.getRadioBoxs()}
            </>
        )
    }
}
