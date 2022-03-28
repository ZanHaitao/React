import React from "react";
import { Route, Redirect } from "react-router-dom";
import loginInfo from "./loginInfo";

export default function ProtectedRoute({
  component: Component,
  render,
  children,
  ...props
}) {
  return (
    <Route
      {...props}
      render={(values) => {
        if (loginInfo.isLogin) {
          return <Component {...values} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                search: "returnUrl=" + values.location.pathname,
              }}
            />
          );
        }
      }}
    ></Route>
  );
}
