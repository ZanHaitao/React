import React from 'react'

function welcome() {
  const loginId = localStorage.getItem("loginId");
  return (
    <h1>welcome 欢迎：{loginId}</h1>
  )
}

welcome.title = "登录页";
welcome.wrappers = ["@/routes/PrivateRoute.js", "@/routes/HandleTitle.js"];
export default welcome;
