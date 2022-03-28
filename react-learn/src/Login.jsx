import React from "react";
import loginInfo from "./loginInfo";
import qs from "query-string";

export default function Login(props) {
  return (
    <div>
      <h1>网站登录页面</h1>
      <button
        onClick={() => {
          const query = qs.parse(props.location.search);
          if (loginInfo.isLogin) {
            loginInfo.loginOut();
          } else {
            loginInfo.login();
            if (query.returnUrl) {
              props.history.push(query.returnUrl);
            } else {
              props.history.push("/");
            }
          }
        }}
      >
        登录/退出
      </button>
    </div>
  );
}
