import React, { Component } from "react";
import ProtTypes from "prop-types";

class ChildA extends Component {
  static contextTypes = {
    a: ProtTypes.number,
    b: ProtTypes.string,
    changeA: ProtTypes.func,
  };

  render() {
    return (
      <div>
        <h1>
          a:{this.context.a},b:{this.context.b}
        </h1>
        <button
          onClick={() => {
            this.context.changeA(this.context.a + 1);
          }}
        >
          a+1
        </button>
      </div>
    );
  }
}

export default class Test extends Component {
  static childContextTypes = {
    a: ProtTypes.number,
    b: ProtTypes.string,
    changeA: ProtTypes.func,
  };

  state = {
    a: 1,
    b: "test",
  };

  getChildContext = () => {
    return {
      a: this.state.a,
      b: this.state.b,
      changeA: (val) => {
        this.setState({
          a: val,
        });
      },
    };
  };

  render() {
    return (
      <div>
        <ChildA />
        <button
          onClick={() => {
            this.setState({
              a: this.state.a + 1,
            });
          }}
        >
          a+1
        </button>
      </div>
    );
  }
}
