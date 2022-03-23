import React, { Component } from "react";
import MouseListener from "./MouseListener";

export default class Test extends Component {
  renderPanel = (state) => {
    return (
      <div
        style={{
          width: 100,
          height: 100,
          background: "red",
          position: "absolute",
          left: state.x - 50,
          top: state.y - 50,
        }}
      ></div>
    );
  };

  renderPoint = (state) => {
    return (
      <h1>
        x:{state.x} y:{state.y}
      </h1>
    );
  };

  render() {
    return (
      <>
        <MouseListener render={this.renderPanel} />
        <MouseListener render={this.renderPoint} />
      </>
    );
  }
}
