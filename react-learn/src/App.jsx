import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./page/Login";
import Admin from "./page/Admin";
import store from "./store";
import { ConnectedRouter } from "connected-react-router";
import history from "./store/history";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" component={Admin} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}
