import React from "react";
import "./Ball.css";

export default class Ball extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      left: props.x || 0,
      top: props.y || 0,
      xSpeed: props.xSpeed,
      ySpeed: props.ySpeed,
    };

    const duration = 16;
    setInterval(() => {
      const disX = (duration * this.state.xSpeed) / 1000;
      const disY = (duration * this.state.ySpeed) / 1000;
      let newLeft = this.state.left + disX;
      let newTop = this.state.top + disY;

      if (newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      } else if (newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      }

      if (newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      } else if (newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      }

      this.setState({
        left: newLeft,
        top: newTop,
      });
    }, duration);
  }

  render() {
    return (
      <div
        className="ball"
        style={{
          left: this.state.left,
          top: this.state.top,
          background: this.props.bg || "red",
        }}
      ></div>
    );
  }
}
