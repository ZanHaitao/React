import React, { Component } from 'react'
import Modal from './index';

export default class Test extends Component {
     
    state = {
        show:false
    }

    showModal = () => {
        this.setState({
            show:true
        })
    }

    hideModal = () => {
        this.setState({
            show:false
        })
    }

    render() {
        return (
            <div>
                <Modal show={this.state.show} onClose={this.hideModal}>
                    <div style={{
                        backgroundColor:'#fff'
                    }}>
                        <h1 >test Modal</h1>
                        <button onClick={this.hideModal}>关闭朦层</button>
                    </div>
                </Modal>
                <button onClick={this.showModal}>打开朦层</button>
            </div>
        )
    }
}
