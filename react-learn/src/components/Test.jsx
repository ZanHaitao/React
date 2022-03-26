import React, { useState } from "react";

export default function Test() {
  const [n, setN] = useState(0);
  const [vis, setVis] = useState(true);

  return (
    <>
      <div style={{ display: vis ? "block" : "none" }}>
        <button
          onClick={() => {
            setN(n - 1);
          }}
        >
          -
        </button>
        <span>{n}</span>
        <button
          onClick={() => {
            setN(n + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          setVis(!vis);
        }}
      >
        显示/隐藏
      </button>
    </>
  );
}
