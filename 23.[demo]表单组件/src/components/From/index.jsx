import React, { Component } from 'react'
import ctx from './FromData';
import FromInput from './FromInput';
import FromButton from './FromButton';
import PropTypes from 'prop-types';

export default class From extends Component {

    state = {
        fromData: {}
    }

    static propTypes = {
        submit: PropTypes.func
    }

    render() {
        return (
            <ctx.Provider value={{
                fromData: this.state.fromData,
                submit:this.props.submit,
                changeFromData: (name, value) => {
                    this.setState({
                        fromData: {
                            ...this.state.fromData,
                            [name]: value
                        }
                    })
                }
            }}>
                {this.props.children}
            </ctx.Provider>
        )
    }
}

From.input = FromInput;
From.button = FromButton;
