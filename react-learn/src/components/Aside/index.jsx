import React from "react";
import "./index.css";

export default function Aside() {
  return (
    <ul className="list">
      <li className="list-item">
        <a href="/students">学生列表</a>
      </li>
      <li className="list-item">
        <a href="/students/add">添加学生</a>
      </li>
      <li className="list-item">
        <a href="/courses">课程列表</a>
      </li>
      <li className="list-item">
        <a href="/courses/add">添加课程</a>
      </li>
    </ul>
  );
}
