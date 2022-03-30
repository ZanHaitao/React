import React from "react";
import reset from "./util/resetScroll";

export default function withScroll(Comp) {
  return class ScrollWrapper extends React.Component {
    componentDidMount() {
      reset();
    }

    render() {
      return <Comp {...this.props} />;
    }
  };
}
