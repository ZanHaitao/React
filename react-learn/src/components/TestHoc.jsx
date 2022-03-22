import React, { Component } from "react";

function withLog(Comp) {
  class LogWrapper extends Component {
    render() {
      const { ref1, ...props } = this.props;
      return <Comp ref={ref1} {...props} />;
    }
  }
  return React.forwardRef((props, ref) => {
    return <LogWrapper {...props} ref1={ref} />;
  });
}

class Comp extends Component {
  render() {
    return <div>TestHoc</div>;
  }
}

const NewRef = withLog(Comp);

export default class TestHoc extends Component {
  test = React.createRef();

  render() {
    return (
      <div>
        <NewRef ref={this.test} />
        <button
          onClick={() => {
            console.log(this.test.current);
          }}
        >
          聚焦
        </button>
      </div>
    );
  }
}
