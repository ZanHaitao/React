import React, { Component } from 'react'
import ErrorBound from './components/ErrorBound';

class ChildA extends Component {

    state = {
        test:''
    }

    render() {
        this.state.test.map(it=> <li>12</li> )
        return (
            <h1>Test</h1>
        )
    }
}


export default class App extends Component {
    render() {
        return (
            <div>
                <ErrorBound>
                    <ChildA />
                </ErrorBound>
            </div>
        )
    }
}
