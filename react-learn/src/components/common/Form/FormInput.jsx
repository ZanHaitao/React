import React, { Component } from "react";
import ctx from "./FormContext";
import PropTypes from "prop-types";

export default class FormInput extends Component {
  static contextType = ctx;

  static defaultProps = {
    type: "text",
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  render() {
    return (
      <input
        value={this.context.formData[this.props.name] || ""}
        type={this.props.type}
        onChange={(e) => {
          this.context.onChangeFormData(this.props.name, e.target.value);
        }}
      />
    );
  }
}
