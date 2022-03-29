import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

let location, action, prevLocation, unBlock;

class _GuardHelp extends Component {
  componentDidMount() {
    unBlock = this.props.history.block((newLocation, ac) => {
      prevLocation = this.props.location;
      location = newLocation;
      action = ac;
      return "";
    });

    this.unListen = this.props.history.listen((newLocation, ac) => {
      prevLocation = this.props.location;
      location = newLocation;
      action = ac;

      this.props.onChange &&
        this.props.onChange(prevLocation, location, action, this.unListen);
    });
  }

  componentWillUnmount() {
    this.unListen();
    unBlock();
  }

  render() {
    return null;
  }
}

const GuardHelp = withRouter(_GuardHelp);

export default class RouterGuard extends Component {
  handleGetUserConfirmation = (msg, callback) => {
    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(
        prevLocation,
        location,
        action,
        callback,
        unBlock
      );
    } else {
      callback(true);
    }
  };

  render() {
    return (
      <Router getUserConfirmation={this.handleGetUserConfirmation}>
        <GuardHelp onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    );
  }
}
