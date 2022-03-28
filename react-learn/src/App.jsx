import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import User from "./User";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to={"/"}>首页</Link>
          </li>
          <li>
            <Link to={"/login"}>登录</Link>
          </li>
          <li>
            <Link to={"/user"}>个人中心</Link>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path={"/login"} component={Login} />
            <ProtectedRoute path={"/user"} component={User} />
            <Route path={"/"} component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
