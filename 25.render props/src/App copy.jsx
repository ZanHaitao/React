import React, { Component } from 'react'
import withMouseListener from './components/withMouseListener';


function DivMouse(props) {
    return (
        <div style={{
            width: 100,
            height: 100,
            background: 'yellow',
            position: 'absolute',
            left: props.x - 50,
            top: props.y - 50
        }}>
        </div>
    )
}

function DivPisition(props) {
    return (
        <>
            left:{props.x},
            top:{props.y}
        </>
    )
}


const DivMoveMouse = withMouseListener(DivMouse)
const DivNum = withMouseListener(DivPisition)

export default class App extends Component {
    render() {
        return (
            <div>
                <DivMoveMouse />
                <DivNum />
            </div>
        )
    }
}
