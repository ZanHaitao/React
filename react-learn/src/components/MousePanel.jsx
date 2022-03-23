import React, { Component } from "react";
import "./style.css";
export default class MousePanel extends Component {
  container = React.createRef();

  state = {
    x: 0,
    y: 0,
  };

  handleMouseMove = (e) => {
    const { left, top } = this.container.current.getBoundingClientRect();
    this.setState({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  render() {
    return (
      <div
        ref={this.container}
        className="container"
        onMouseMove={this.handleMouseMove}
      >
        <div
          style={{
            width: 100,
            height: 100,
            background: "red",
            position: "absolute",
            left: this.state.x - 50,
            top: this.state.y - 50,
          }}
        ></div>
      </div>
    );
  }
}
