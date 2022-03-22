import React from "react";

export default function withLogin(Comp) {
  return class LoginWrapper extends React.Component {
    render() {
      return <>{this.props.login ? <Comp {...this.props} /> : null}</>;
    }
  };
}
