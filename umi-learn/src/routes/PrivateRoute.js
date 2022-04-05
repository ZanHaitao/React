import React from 'react'
import { Link } from 'umi'

export default function PrivateRoute(props) {
  const loginId = localStorage.getItem("loginId");
  if (loginId) {
    return props.children;
  } else {
    document.title = "未登录";
    return <div>
      未登录无法访问！<Link to={"/login"}>点击跳转</Link>
    </div>
  }
}
