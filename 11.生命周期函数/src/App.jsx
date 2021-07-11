import React, { Component } from 'react'

export default class App extends Component {

    state = {
        n: 1
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) { // 一般用于性能优化
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate',nextProps, nextState);
    }
    

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate',prevProps,prevState);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }    

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('getSnapshotBeforeUpdate');
        return 11
    }
    

    render() {
        console.log('render');
        return (
            <div>
                <p>{this.state.n}</p>
                <p>
                    <button onClick={() => {
                        this.setState({
                            n: this.state.n + 1
                        })
                    }}>+1</button>
                </p>
            </div>
        )
    }
}
