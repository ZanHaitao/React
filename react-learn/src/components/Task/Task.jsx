import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Task.css";
import ctx from "./taskContext";

export default class Task extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isFinsh: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  };

  static contextType = ctx;

  render() {
    return (
      <li className={this.props.isFinsh ? "finsh" : ""}>
        <button
          onClick={() => {
            this.context.onChangeFinsh(this.props.index);
          }}
        >
          完成/未完成
        </button>
        {this.props.name}
      </li>
    );
  }
}
