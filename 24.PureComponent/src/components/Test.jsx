import React, { Component } from 'react'
import TaskList from './TaskList';
import AddTask from './AddTask';

export default class Test extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        const arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push({
                task: '测试任务',
                finish: Math.round(Math.random()) ? true : false
            })
        }
        this.setState({
            list: [...arr]
        })
    }

    handleAddTask = (taskData) => {
        this.setState({
            list:[...this.state.list,taskData]
        })
    }

    render() {
        return (
            <>
                <AddTask addTask={this.handleAddTask} />
                <TaskList list={this.state.list} />
            </>
        )
    }
}
