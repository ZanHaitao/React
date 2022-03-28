import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import config from "./routerConfig";

function User(props) {
  return (
    <div>
      <h1>用户路由界面：</h1>
      <h2>
        <Link to={config.user.pay.root} style={{ marginRight: 20 }}>
          切换用户交易
        </Link>
        <Link to={config.user.work}>切换用户工作</Link>
      </h2>
      <div
        style={{
          width: 500,
          height: 500,
          border: "2px solid",
          background: "green",
          margin: "0 auto",
        }}
      >
        <Route path={config.user.pay.root} component={UserPay} />
        <Route path={config.user.work} component={UserWork} />
      </div>
    </div>
  );
}
function UserPay() {
  return <h1>用户交易路由</h1>;
}

function UserWork() {
  return <h1>用户工作路由</h1>;
}

export default function App() {
  return (
    <div>
      <Router>
        <Route path={config.user.root} component={User} />
      </Router>
    </div>
  );
}
