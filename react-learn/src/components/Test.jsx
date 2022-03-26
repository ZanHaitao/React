import React, { useLayoutEffect, useRef, useState } from "react";

export default function Test() {
  const [n, setN] = useState(0);
  const h1Ref = useRef();
  useLayoutEffect(() => {
    h1Ref.current.innerHTML = Math.random();
  });
  return (
    <div>
      <h1 ref={h1Ref}>{n}</h1>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        n+1
      </button>
    </div>
  );
}
