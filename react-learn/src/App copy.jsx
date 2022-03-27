import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
  return <h1>CompD</h1>;
}
export default function App() {
  return (
    <Router>
      <Route path="/a" component={CompA} />
      <Route path="/b" component={CompB} />
      <Route path="/c" component={CompC} />
      <Route path="/d" component={CompD} />
    </Router>
  );
}
