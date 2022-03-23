import React, { Component } from "react";

export default class ErrorBound extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    return <>{this.state.hasError ? "" : this.props.children}</>;
  }
}
