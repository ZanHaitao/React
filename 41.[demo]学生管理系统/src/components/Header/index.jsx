import React, { Component } from "react";
import "./index.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo">学生管理系统</div>
        <div className="user">
          <span className="user-name">用户名</span>
          <span className="login-out">退出</span>
        </div>
      </div>
    );
  }
}
