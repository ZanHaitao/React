import React, { Component } from 'react'
import ctx from './FromData';
import PropTypes from 'prop-types';

export default class FromInput extends Component {

    static contextType = ctx

    static defaultProps = {
        type: 'text'
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }

    constructor(props, context) {
        super(props, context)
        context.changeFromData(this.props.name, '')
    }

    render() {
        return (
            <input type={this.props.type} value={this.context.fromData[this.props.name] || ''} onChange={e => {
                this.context.changeFromData(this.props.name,e.target.value)
            }} />
        )
    }
}
