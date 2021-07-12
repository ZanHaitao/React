import React, { Component } from 'react'
import Test from './Test';

export default class App extends Component {
    render() {
        return (
            <div>
                <Test a='12322' c={{value:'test',text:'11'}}/>
            </div>
        )
    }
}
