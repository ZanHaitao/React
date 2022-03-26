import React, { useMemo, useState } from "react";

function Item(props) {
  console.log("render");
  return <li>{props.n}</li>;
}

export default function Test() {
  const [num, setNum] = useState(1000);
  const [, update] = useState({});
  const itemList = useMemo(() => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(<Item key={i} n={i}></Item>);
    }
    return arr;
  }, [num]);

  return (
    <>
      <button
        onClick={() => {
          update({});
        }}
      >
        刷新
      </button>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        num+1
      </button>
      <ul>{itemList}</ul>
    </>
  );
}
