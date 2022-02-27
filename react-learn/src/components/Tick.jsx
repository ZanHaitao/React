import React from "react";

export default class Tick extends React.Component {
  state = {
    left: this.props.number,
  };

  constructor(props) {
    super(props);

    this.timer = setInterval(() => {
      this.setState({
        left: this.state.left - 1,
      });
      if (this.state.left === 0) {
        clearInterval(this.timer);
      }
    },1000);
  }

  render() {
    return <h1>剩余倒计时：{this.state.left}</h1>;
  }
}
