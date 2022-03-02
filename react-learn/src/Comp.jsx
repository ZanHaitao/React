import React from "react";

export default class Comp extends React.Component {
  state = {
    n: 0,
  };

  handleClick = () => {
    this.setState((curr) => {
      return {
        n: curr.n + 1,
      };
    },()=>{
      console.log(this.state.n);
    });
    this.setState((curr) => {
      return {
        n: curr.n + 1,
      };
    });
    this.setState((curr) => {
      return {
        n: curr.n + 1,
      };
    });
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
