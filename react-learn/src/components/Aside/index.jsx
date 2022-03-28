import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function Aside() {
  return (
    <ul className="list">
      <li className="list-item">
        <NavLink exact to="/students">学生列表</NavLink>
      </li>
      <li className="list-item">
        <NavLink exact to="/students/add">添加学生</NavLink>
      </li>
      <li className="list-item">
        <NavLink exact to="/courses">课程列表</NavLink>
      </li>
      <li className="list-item">
        <NavLink exact to="/courses/add">添加课程</NavLink>
      </li>
    </ul>
  );
}
