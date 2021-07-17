import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ChildA extends Component {

    static contextTypes = {
        name:PropTypes.string,
        changeName:PropTypes.func
    }

    render() {
        return (
            <div>
                {this.context.name}
                <button onClick={()=>{
                    this.context.changeName('张三')
                }}>修改</button>
            </div>
        )
    }
}



export default class OldContext extends Component {

    static childContextTypes = {
        name:PropTypes.string,
        changeName:PropTypes.func
    }

    state = {
        name:'xxx'
    }

    getChildContext(){
        return {
            name:this.state.name,
            changeName:(val)=>{
                this.setState({
                    name:val
                })
            }
        }
    }

    render() {
        return (
            <div>
                <ChildA />
            </div>
        )
    }
}
