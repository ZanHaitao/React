import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TestDefaultProps extends Component {
  static propTypes = {
    a: PropTypes.any.isRequired,
    b: PropTypes.string,
    c: PropTypes.number,
    d: PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    return <div>TestDefaultProps</div>;
  }
}
