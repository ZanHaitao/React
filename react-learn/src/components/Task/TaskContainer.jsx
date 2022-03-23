import React, { Component } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import ctx from "./taskContext";

export default class TaskContainer extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    const tasks = [];
    for (let i = 1; i <= 10; i++) {
      tasks.push({
        name: `任务：${i}`,
        isFinsh: Math.random() > 0.5,
      });
    }
    this.setState({
      tasks: tasks,
    });
  }

  addTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  };

  onChangeFinsh = (index) => {
    const newTask = this.state.tasks;
    newTask[index].isFinsh = !newTask[index].isFinsh;
    this.setState({
      tasks: newTask,
    });
  };

  render() {
    return (
      <ctx.Provider
        value={{
          onChangeFinsh: this.onChangeFinsh,
        }}
      >
        <AddTask onAdd={this.addTask} />
        <TaskList tasks={this.state.tasks} />
      </ctx.Provider>
    );
  }
}
