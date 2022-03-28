import React from "react";
import "./index.css";

/**
 * current 当前页码
 * total 数据总数
 * limit 显示条数
 * onPageChange
 * @returns
 */
export default function Pager(props) {
  const lastPage = Math.ceil(props.total / props.limit);

  function handlePageChange(newPage) {
    props.onPageChange && props.onPageChange(newPage);
  }

  if (lastPage === 0) {
    return null;
  }
  return (
    <div className="pager">
      <span
        className="pager-btn"
        onClick={() => {
          handlePageChange(1);
        }}
      >
        首页
      </span>
      {props.current !== 1 ? (
        <span
          className="pager-btn"
          onClick={() => {
            handlePageChange(1);
          }}
        >
          1
        </span>
      ) : (
        ""
      )}
      {props.current - 2 > 2 ? <span className="symbol">...</span> : ""}
      {props.current - 2 > 1 ? (
        <span
          className="pager-btn"
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
          className="pager-btn"
          onClick={() => {
            handlePageChange(props.current - 1);
          }}
        >
          {props.current - 1}
        </span>
      ) : (
        ""
      )}
      <span className="pager-btn active">{props.current}</span>
      {props.current + 1 < lastPage ? (
        <span
          className="pager-btn"
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
          className="pager-btn"
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
        <span className="symbol">...</span>
      ) : (
        ""
      )}
      {props.current !== lastPage ? (
        <span
          className="pager-btn"
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
        className="pager-btn"
        onClick={() => {
          handlePageChange(lastPage);
        }}
      >
        末页
      </span>
      <span className="pager-text">
        {props.current}/{lastPage}
      </span>
    </div>
  );
}
