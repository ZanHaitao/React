import React from 'react';
import { routerRedux, NavLink, Route, Switch } from "dva/router"
import Home from './components/Home'
import Counter from './components/Counter';

export default function configRouter({ history }) {
  return (
    <routerRedux.ConnectedRouter history={history}>
      <div>
        <div>
          <NavLink to={"/"}>首页</NavLink>
          <NavLink to={"/counter"}>计数器</NavLink>
        </div>
        <div>
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/counter"} exact component={Counter} />
          </Switch>
        </div>
      </div>
    </routerRedux.ConnectedRouter>
  )
}
