import React, { Component } from 'react'
import withLog from './HOC/withLog';
import Test from './Test'

const TestLog = withLog(Test)

export default class App extends Component {
    div = React.createRef()

    componentDidMount(){
        console.log(this.div)
    }

    render() {
        return (
            <div>
                <TestLog name="阿嘎嘎" ref={this.div}/>
            </div>
        )
    }
}
