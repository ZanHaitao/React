import React, { Component } from "react";
import CheckBoxGroup from "./common/CheckBoxGroup";

export default class Test extends Component {
  state = {
    list: [
      { value: "shanghai", text: "上海" },
      { value: "beijing", text: "北京" },
      { value: "guangzhou", text: "广州" },
    ],
    chooes: [],
  };

  render() {
    return (
      <div>
        <CheckBoxGroup
          list={this.state.list}
          chooes={this.state.chooes}
          onChange={(arr) => {
            this.setState({
              chooes: arr,
            });
          }}
        />
      </div>
    );
  }
}
