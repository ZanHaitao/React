import React, { Component } from "react";
import ReactDOM from "react-dom";

function Child() {
  return ReactDOM.createPortal(<h1>Child</h1>, document.getElementById("test"));
}
export default class Test extends Component {
  render() {
    return (
      <>
        <h1>Test</h1>
        <Child />
      </>
    );
  }
}
