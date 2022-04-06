import React from "react";
import "./index.css";

export default function Modal(props) {
  const defaultProps = {
    bg: "rgba(0,0,0,.5)",
  };
  const datas = Object.assign({}, defaultProps, props);
  return (
    <div
      className="modal-wrapper"
      style={{
        background: datas.bg,
      }}
      onClick={(e) => {
        e.target.className === "modal-wrapper" &&
          datas.onClose &&
          datas.onClose();
      }}
    >
      <div className="modal-content">{datas.children}</div>
    </div>
  );
}