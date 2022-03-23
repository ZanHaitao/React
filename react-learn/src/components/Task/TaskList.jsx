import React, { Component } from "react";
import PropTypes from "prop-types";
import Task from "./Task";

export default class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        isFinsh: PropTypes.bool.isRequired,
      })
    ),
  };

  getTaskList = () => {
    return this.props.tasks.map((it, i) => {
      return <Task key={i} {...it} index={i} />;
    });
  };

  render() {
    return <ul>{this.getTaskList()}</ul>;
  }
}
