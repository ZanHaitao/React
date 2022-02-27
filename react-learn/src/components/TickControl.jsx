import React, { Component } from "react";
import Tick from "./Tick";

export default class TickControl extends Component {
  state = {
    isOver: false,
  };

  handleOver = () => {
    this.setState({
      isOver: true,
    });
  };

  render() {
    let flag = "倒计时中...";
    if (this.state.isOver) {
      flag = "倒计时完成！";
    }
    return (
      <div>
        <Tick number={10} onOver={this.handleOver}/>
        <h1>{flag}</h1>
      </div>
    );
  }
}
