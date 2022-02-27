import React, { Component } from "react";

export default class Tick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: props.number,
    };

    const timer = setInterval(() => {
      this.setState({
        number: this.state.number - 1,
      });
      if (this.state.number === 0) {
        clearInterval(timer);
        props.onOver && props.onOver();
      }
    }, 1000);
  }
  render() {
    return <h1>距离倒计时结束：{this.state.number}</h1>;
  }
}
