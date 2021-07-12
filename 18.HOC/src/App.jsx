import React, { Component } from 'react'
import withLog from './HOC/withLog';
import Test from './Test'

const TestLog = withLog(Test)

export default class App extends Component {
    render() {
        return (
            <div>
                <TestLog name="阿嘎嘎" />
            </div>
        )
    }
}
