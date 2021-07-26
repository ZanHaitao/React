import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function A() {
  return <h1>组件AA</h1>
}

function B() {
  return <h1>组件B</h1>
}

function C() {
  return <h1>组件C</h1>
}

function D() {
  return <h1>找不到页面</h1>
}

function E() {
  return <h1>找不到/a页面</h1>
}

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/a' children={() => {
            return <Switch>
              <Route path="/a/d" component={A} />
              <Route component={E}></Route>
            </Switch>
          }} />
          <Route path='/a/b' exact component={B} />
          <Route path='/a/c' exact component={C} />
          <Route component={D} /> 
        </Switch>
      </Router>
    </div>
  )
}
