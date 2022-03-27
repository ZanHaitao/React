import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function CompA() {
  return <h1>CompA</h1>;
}
function CompB() {
  return <h1>CompB</h1>;
}
function CompC() {
  return <h1>CompC</h1>;
}
function CompD() {
  return <h1>404</h1>;
}
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/a" exact component={CompA} />
        <Route path="/a/b" exact component={CompB} />
        <Route path="/a/c" exact component={CompC} />
        <Route exact component={CompD} />
      </Switch>
    </Router>
  );
}
