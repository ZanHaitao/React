import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import qs from "query-string";

function A(props) {
  const query = qs.parse(props.location.search);
  console.log(props.match);
  return (
    <div>
      <h1>A组件</h1>
      <p>参数：{JSON.stringify(query)}</p>
      <p>Paramas：{JSON.stringify(props.match.params)}</p>
      <button
        onClick={() => {
          props.history.push("/a/b");
        }}
      >
        跳转B组件
      </button>
    </div>
  );
}

function B(props) {
  return (
    <div>
      <h1>B组件</h1>
      <button
        onClick={() => {
          props.history.push("/a/1?a=111&b=122");
        }}
      >
        跳转A组件
      </button>
    </div>
  );
}

function ErrorComp(props) {
  return <h1>404未找到当前页面</h1>;
}

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/a/b" exact component={B} />
          <Route path="/a/:id" exact component={A} />
          <Route component={ErrorComp} />
        </Switch>
      </Router>
    </div>
  );
}
