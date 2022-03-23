import React, { Component } from "react";
import "./style.css";
export default class ShowMousePoint extends Component {
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
        <h1>
          x:{this.state.x} y:{this.state.y}
        </h1>
      </div>
    );
  }
}
