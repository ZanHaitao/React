import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.txt = React.createRef();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.txt} />
        <button
          onClick={() => {
            this.txt.current.focus();
          }}
        >
          聚焦
        </button>
      </div>
    );
  }
}
