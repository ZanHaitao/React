import React, { Component } from 'react'
import MouseListener from './components/MouseListener';

const DivMouse = (state) => <div style={{
    width: 100,
    height: 100,
    background: 'yellow',
    position: 'absolute',
    left: state.x - 50,
    top: state.y - 50
}}>
</div>

const DivPisition = state => (<>
    left:{state.x},
    top:{state.y}
</>)


export default class App extends Component {
    render() {
        return (
            <div>
                <MouseListener render={DivMouse}/>
                <MouseListener render={DivPisition}/>
            </div>
        )
    }
}
