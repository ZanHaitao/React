import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Test extends Component {

    static defaultProps = {
        a:'123',
        b:456
    }

    static propTypes = {
        a:PropTypes.string,
        b:PropTypes.number,
        c:PropTypes.shape({
            value:PropTypes.string.isRequired,
            text:PropTypes.string.isRequired
        })
    }

    render() {
        return (
            <div>
                a:{this.props.a},
                b:{this.props.b}
            </div>
        )
    }
}
