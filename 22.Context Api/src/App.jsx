import React, { Component } from 'react'
const ctx = React.createContext();

function ChildB() {
    return (
        <ctx.Consumer>
            {context => {
                return <h1>name:{context.name}</h1>
            }}
        </ctx.Consumer>
    )
}


class ChildA extends Component {

    static contextType = ctx

    render() {
        return (
            <div>
                name:{this.context.name},
                <button onClick={() => {
                    this.context.changeName('zhangsan')
                }}>修改</button>
                <ChildB />
            </div>
        )
    }
}


export default class App extends Component {
    state = {
        name: 'xxx'
    }
    render() {
        return (
            <ctx.Provider value={
                {
                    name: this.state.name,
                    changeName: (val) => {
                        this.setState({
                            name: val
                        })
                    }
                }
            }>
                <ChildA />
            </ctx.Provider>
        )
    }
}
