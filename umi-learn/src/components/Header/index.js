import React from 'react'
import CSSModule from "react-css-modules"
import styles from './index.css'

function Header(props) {
  return (
    <div styleName="header">
      <div styleName="left">
        <h1>欢迎使用学生管理系统</h1>
      </div>
      <div styleName="right">
        <span>欢迎你</span>
        <span>{props.loginUser}</span>
        <button onClick={() => {
          props.onLoginOut && props.onLoginOut()
        }}>注销登录</button>
      </div>
    </div>
  )
}

export default CSSModule(Header, styles);