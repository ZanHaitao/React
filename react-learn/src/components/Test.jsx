import React, { Component } from "react";

const ctx = React.createContext();
class ChildA extends Component {
  static contextType = ctx;
  render() {
    return (
      <div>
        <h1>ChildA</h1>
        <h1>a:{this.context.a}</h1>
        <h1>b:{this.context.b}</h1>
        <button
          onClick={() => {
            this.context.onChangeA(this.context.a + 1);
          }}
        >
          后代+1
        </button>
      </div>
    );
  }
}

function ChildB(props) {
  return (
    <ctx.Consumer>
      {(value) => (
        <div>
          <h1>ChildB</h1>
          <h1>a:{value.a}</h1>
          <h1>b:{value.b}</h1>
          <button
            onClick={() => {
              value.onChangeA(value.a + 1);
            }}
          >
            后代+1
          </button>
        </div>
      )}
    </ctx.Consumer>
  );
}

export default class Test extends Component {
  state = {
    a: 1,
    b: "test",
    onChangeA: (val) => {
      this.setState({
        a: val,
      });
    },
  };
  render() {
    return (
      <div>
        <ctx.Provider value={this.state}>
          <ChildA />
          <ChildB />
          <button
            onClick={() => {
              this.setState({
                a: this.state.a + 1,
              });
            }}
          >
            元素自己+1
          </button>
        </ctx.Provider>
      </div>
    );
  }
}
