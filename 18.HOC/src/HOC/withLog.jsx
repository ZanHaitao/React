import React, { Component } from 'react'

export default function name(Comp) {
    return class withLog extends Component {
        componentDidMount(){
            console.log('组件初始化完毕')
        }
        
        componentWillUnmount(){
            console.log('组件已经销毁')
        }

        render() {
            return (
                <Comp {...this.props} />
            )
        }
    }
}
