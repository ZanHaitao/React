import React, { Component } from 'react'
import ThreeLayout from './index';

export default class Test extends Component {
    render() {
        return (
            <div style={{
                height:400
            }}>
                <ThreeLayout left={ <h1>Left</h1> } right={ <h1>Right</h1> }>
                    <h1>Main</h1>
                </ThreeLayout>
            </div>
        )
    }
}
