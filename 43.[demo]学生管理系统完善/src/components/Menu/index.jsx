import React from "react";
import "./index.scss";

/**
 * 切换路由
 * @param {*} history 
 * @param {*} path 
 */
function handleTabPage(history, path) {
  history.push(path);
}

export default function Menu(props) {
  const pathname = props.location.pathname;
  return (
    <ul className="menu">
      <li
        onClick={() => {
          handleTabPage(props.history, "/");
        }}
        className={pathname === "/" ? "active" : ""}
      >
        系统首页
      </li>
      <li
        onClick={() => {
          handleTabPage(props.history, "/student");
        }}
        className={pathname === "/student" ? "active" : ""}
      >
        学生列表
      </li>
      <li
        onClick={() => {
          handleTabPage(props.history, "/student/add");
        }}
        className={pathname === "/student/add" ? "active" : ""}
      >
        添加学生
      </li>
      <li
        onClick={() => {
          handleTabPage(props.history, "/course");
        }}
        className={pathname === "/course" ? "active" : ""}
      >
        课程列表
      </li>
      <li
        onClick={() => {
          handleTabPage(props.history, "/course/add");
        }}
        className={pathname === "/course/add" ? "active" : ""}
      >
        添加课程
      </li>
    </ul>
  );
}
