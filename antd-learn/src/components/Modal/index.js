import React from "react";
import styles from "./index.css";

export default function Modal(props) {
  const defaultProps = {
    bg: "rgba(0,0,0,.5)",
  };
  const datas = Object.assign({}, defaultProps, props);
  return (
    <div
      className={styles["modal-wrapper"]}
      style={{
        background: datas.bg,
      }}
      onClick={(e) => {
        e.target.className === styles["modal-wrapper"] &&
          datas.onClose &&
          datas.onClose();
      }}
    >
      <div className={styles["modal-content"]}>{datas.children}</div>
    </div>
  );
}