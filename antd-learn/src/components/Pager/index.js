import React from "react";
import styles from "./index.css";
import CSSModule from "react-css-modules"

/**
 * current 当前页码
 * total 数据总数
 * limit 显示条数
 * onPageChange
 * @returns
 */
function Pager(props) {
  const lastPage = Math.ceil(props.total / props.limit);

  function handlePageChange(newPage) {
    props.onPageChange && props.onPageChange(newPage);
  }

  if (lastPage === 0) {
    return null;
  }
  return (
    <div styleName="pager">
      <span
        styleName="pager-btn"
        onClick={() => {
          handlePageChange(1);
        }}
      >
        首页
      </span>
      {props.current !== 1 ? (
        <span
          styleName="pager-btn"
          onClick={() => {
            handlePageChange(1);
          }}
        >
          1
        </span>
      ) : (
        ""
      )}
      {props.current - 2 > 2 ? <span styleName="symbol">...</span> : ""}
      {props.current - 2 > 1 ? (
        <span
          styleName="pager-btn"
          onClick={() => {
            handlePageChange(props.current - 2);
          }}
        >
          {props.current - 2}
        </span>
      ) : (
        ""
      )}
      {props.current - 1 > 1 ? (
        <span
          styleName="pager-btn"
          onClick={() => {
            handlePageChange(props.current - 1);
          }}
        >
          {props.current - 1}
        </span>
      ) : (
        ""
      )}
      <span styleName="pager-btn" className={styles.active}>{props.current}</span>
      {props.current + 1 < lastPage ? (
        <span
          styleName="pager-btn"
          onClick={() => {
            handlePageChange(props.current + 1);
          }}
        >
          {props.current + 1}
        </span>
      ) : (
        ""
      )}
      {props.current + 2 < lastPage ? (
        <span
          styleName="pager-btn"
          onClick={() => {
            handlePageChange(props.current + 2);
          }}
        >
          {props.current + 2}
        </span>
      ) : (
        ""
      )}
      {props.current + 2 < lastPage - 1 ? (
        <span styleName="symbol">...</span>
      ) : (
        ""
      )}
      {props.current !== lastPage ? (
        <span
          styleName="pager-btn"
          onClick={() => {
            handlePageChange(lastPage);
          }}
        >
          {lastPage}
        </span>
      ) : (
        ""
      )}
      <span
        styleName="pager-btn"
        onClick={() => {
          handlePageChange(lastPage);
        }}
      >
        末页
      </span>
      <span styleName="pager-text">
        {props.current}/{lastPage}
      </span>
    </div>
  );
}

export default CSSModule(Pager, styles);