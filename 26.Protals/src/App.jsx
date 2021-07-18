import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function ChildB() {
    return ReactDOM.createPortal(( <h1>ChildB</h1> ),document.getElementById('modal'))
}


function ChildA() {
    return (
        <div>
            <h1>ChildA</h1>           
            <ChildB />
        </div>
    )
}


export default class App extends Component {
    render() {
        return (
            <div>
                <ChildA />
            </div>
        )
    }
}
