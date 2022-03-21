import React from "react";
import "./index.css";

export default function ThreeLayout(props) {
  const defaultProps = {
    leftWidth: 200,
    minWidth: 800,
    rightWidth: 200,
  };

  const datas = Object.assign({}, defaultProps, props);

  return (
    <div
      className="three-layout"
      style={{
        minWidth: datas.minWidth,
      }}
    >
      <div className="main">{datas.children}</div>
      <div
        className="aside-left"
        style={{
          width: datas.leftWidth,
        }}
      >
        {datas.left}
      </div>
      <div
        className="aside-right"
        style={{
          width: datas.rightWidth,
        }}
      >
        {datas.right}
      </div>
    </div>
  );
}
