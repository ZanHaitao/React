import React, { Component } from 'react'

export default class index extends Component {

    getSelectBoxs() {
        return this.props.datas.map(it => (<option key={it.value} value={it.value}>
            {it.text}
        </option>))
    }

    render() {
        return (
            <>
                <select name={this.props.name} onChange={(e) => {
                    this.props.onChange(e);
                }}>
                    {this.getSelectBoxs()}
                </select>
            </>
        )
    }
}
