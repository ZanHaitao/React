import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddTask extends Component {
  state = {
    name: "",
  };

  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({
              name: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            this.props.onAdd &&
              this.props.onAdd({
                name: this.state.name,
                isFinsh: false,
              });
            this.setState({
              name: "",
            });
          }}
        >
          添加
        </button>
      </>
    );
  }
}
