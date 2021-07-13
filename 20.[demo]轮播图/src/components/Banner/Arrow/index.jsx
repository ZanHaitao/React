import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css'

export default class Arrow extends Component {

    static propTypes = {
        onChange:PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="arrow">
                <span className='arrow-btn left' onClick={()=>{
                    this.props.onChange && this.props.onChange('left');
                }}>&lt;</span>
                <span className='arrow-btn right' onClick={()=>{
                    this.props.onChange && this.props.onChange('right');
                }}>&gt;</span>
            </div>
        )
    }
}
