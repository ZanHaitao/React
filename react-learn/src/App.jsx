import React from "react";
import { Route, Link } from "react-router-dom";
import Router from "./RouterGuard";

function Page1() {
  return <h1>Page1</h1>;
}

function Page2() {
  return <h1>Page2</h1>;
}
let count = 1;
export default function App() {
  return (
    <div>
      <Router
        onBeforeChange={(prev, curr, ac, callback, unBlock) => {
          callback(true);
        }}
        onChange={(prev, curr, ac, unListen) => {
          console.log(`路由从${prev.pathname}转到${curr.pathname} 跳转方式为：${ac}`);
          if (count === 5) {
            unListen();
          }
          count++;
        }}
      >
        <div>
          <Link to={"/page1"}>页面1</Link>
          <Link to={"/page2"}>页面2</Link>
        </div>
        <div>
          <Route path={"/page1"} component={Page1} />
          <Route path={"/page2"} component={Page2} />
        </div>
      </Router>
    </div>
  );
}
