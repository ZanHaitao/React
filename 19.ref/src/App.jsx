import React, { Component } from 'react'
import Ref from './Ref';

export default class App extends Component {

    refDiv = React.createRef();

    handleClick(){
        this.refDiv.current.handleClick()
    }

    render() {
        return (
            <div>
                <Ref ref={this.refDiv}/>
                <button onClick={()=>{this.handleClick()}}>点击</button>
            </div>
        )
    }
}
