import React, { useCallback, useState } from "react";

class TestCallback extends React.PureComponent {
  render() {
    console.log("TestCallback render");
    return (
      <div>
        <h1>{this.props.num}</h1>
        <button onClick={this.props.onChange}>改变</button>
      </div>
    );
  }
}

export default function Test() {
  console.log("Test render");
  const [num, setNum] = useState(0);
  const [, update] = useState({});

  const handleChange = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  return (
    <div>
      <TestCallback num={num} onChange={handleChange} />
      <button
        onClick={() => {
          update({});
        }}
      >
        刷新
      </button>
    </div>
  );
}
