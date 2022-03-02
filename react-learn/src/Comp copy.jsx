import React from "react";

export default class Comp extends React.Component {
  state = {
    n: 0,
  };

  handleClick = () => {
    this.setState(
      {
        n: this.state.n + 1,
      },
      () => {
        console.log(this.state.n);
      }
    );
    // console.log(this.state.n);
  };

  render() {
    console.log("render" + this.state.n);
    return (
      <>
        <h1>{this.state.n}</h1>
        <button onClick={this.handleClick}>+</button>
      </>
    );
  }
}
