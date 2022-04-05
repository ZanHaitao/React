import React, { useState } from 'react'
import { history } from 'umi'

function Login() {
  const [loginId, setLoginId] = useState("");
  const [loginPwd, setLoginPwd] = useState("");
  return (
    <div>
      <p>
        <label>
          账号：
          <input type="text" value={loginId} onChange={e => {
            setLoginId(e.target.value)
          }} />
        </label>
      </p>
      <p>
        <label>
          密码：
          <input type="password" value={loginPwd} onChange={e => {
            setLoginPwd(e.target.value)
          }} />
        </label>
      </p>
      <p>
        <button onClick={() => {
          if (loginId !== "" && loginPwd === "admin") {
            localStorage.setItem("loginId", loginId);
            history.push('/welcome')
          } else {
            alert("账号/密码 不正确！")
          }
        }}>登录</button>
        <button onClick={() => {
          localStorage.removeItem("loginId")
        }}>注销</button>
      </p>
    </div>
  )
}

Login.title = "登录页";
// Login.wrappers = ["@/routes/HandleTitle.js"];
export default Login;