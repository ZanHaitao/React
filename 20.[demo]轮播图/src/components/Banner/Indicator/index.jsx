import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types';

export default class Indicator extends Component {

    static propTypes = {
        current: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired
    }

    getSpans = () => {
        const spans = [];
        for (let i = 0; i < this.props.total; i++) {
            spans.push(<span key={i}
                className={this.props.current === i ? "indicator-btn active" : "indicator-btn"}
                onClick={() => {
                    this.props.onChange && this.props.onChange(i);
                }}
            ></span>)
        }
        return spans;
    }

    render() {
        const spans = this.getSpans();
        return (
            <div className="indicator">
                {spans}
            </div>
        )
    }
}
