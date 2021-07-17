import React, { Component } from 'react'
import ctx from './FromData';

export default class FromButton extends Component {
    static contextType = ctx

    render() {
        return (
            <button onClick={()=>{
                this.context.submit && this.context.submit(this.context.fromData)
            }}>
                {this.props.children}
            </button>
        )
    }
}
