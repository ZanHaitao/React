import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Task from './Task';

export default class TaskList extends Component {

    static propTypes = {
        list:PropTypes.arrayOf(PropTypes.shape({
            task:PropTypes.string.isRequired,
            finish:PropTypes.bool.isRequired
        }))
    }

    getTasks(){
        return this.props.list.map((it,index)=>{
            return <Task key={index} {...it}/>
        })
    }

    render() {
        return (
            <ul>
                {this.getTasks()}
            </ul>
        )
    }
}
