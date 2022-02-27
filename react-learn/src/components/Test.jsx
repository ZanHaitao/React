import React from "react";

export default class Test extends React.Component {
  state = {
    number: 100,
  };

  constructor(props) {
    super(props);

    this.timer = setInterval(() => {
      this.setState({
        number: this.state.number - 1,
      });
      if (this.state.number === 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>倒计时</h1>
        <A number={this.state.number} />
      </div>
    );
  }
}

function A(props) {
  return (
    <>
      <h1>A组件倒计时：{props.number}</h1>
      <B number={props.number} />
    </>
  );
}

function B(props) {
  return <h1>B组件倒计时：{props.number}</h1>;
}
