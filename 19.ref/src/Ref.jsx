import React, { Component } from 'react'

export default class Ref extends Component {
    
    handleClick(){
        console.log('被点击了！！');
    }

    render() {
        return (
            <div>
                Test ref
            </div>
        )
    }
}
