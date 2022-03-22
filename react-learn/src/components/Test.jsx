import React, { Component } from "react";

function TestRef(props, ref) {
  return <div ref={ref}>test</div>;
}

const NewRef = React.forwardRef(TestRef);

export default class Test extends Component {
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
