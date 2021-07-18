import React, { Component } from 'react'

export default class ErrorBound extends Component {

    state = {
        hasError:false
    }

    static getDerivedStateFromError(){
        console.log(123);
        return {
            hasError:true
        }
    }

    componentDidCatch(){
        console.log('错误记录')
    }

    render() {
        if(this.state.hasError){
            return <h1>出错误了</h1>
        }
        return (
            <>
                {this.props.children}
            </>
        )
    }
}
