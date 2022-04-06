import React, { useRef } from 'react'
import CSSModule from "react-css-modules"
import styles from './index.css'

function LoginForm(props) {
  const txtRef1 = useRef();
  const txtRef2 = useRef();
  return (
    <div styleName='login-container'>
      <div styleName='item'>
        <label htmlFor="loginId">账号：</label>
        <input ref={txtRef1} type="text" id="loginId" />
      </div>
      <div styleName='item'>
        <label htmlFor="loginPwd">密码：</label>
        <input ref={txtRef2} type="password" id="loginPwd" />
      </div>
      <div styleName="item">
        <button onClick={() => {
          const loginId = txtRef1.current.value;
          const loginPwd = txtRef2.current.value;
          if (loginId && loginPwd) {
            props.onLogin && props.onLogin(loginId, loginPwd)
          }else{
            alert("账号或密码不能为空！")
          }
        }}>登录</button>
      </div>
    </div>
  )
}

export default CSSModule(LoginForm, styles)