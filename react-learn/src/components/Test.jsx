import React, { useImperativeHandle, useRef } from "react";

function Child(props, ref) {
  useImperativeHandle(ref, () => {
    return {
      method() {
        console.log("test method");
      },
    };
  });
  return <h1>test</h1>;
}

const NewChild = React.forwardRef(Child);

export default function Test() {
  const ref = useRef();
  return (
    <div>
      <NewChild ref={ref} />
      <button
        onClick={() => {
          ref.current.method();
        }}
      >
        调用
      </button>
    </div>
  );
}
