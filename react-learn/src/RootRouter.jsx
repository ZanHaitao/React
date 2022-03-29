import React from "react";
import routerConfig from "./routerConfig";
import { Route, Switch } from "react-router-dom";

export default function RootRouter() {
  return <Switch>{getRoute(routerConfig, "")}</Switch>;
}

/**
 * 通过配置文件生成Route
 * @param {*} config
 * @param {*} basePath
 * @returns
 */
function getRoute(config, basePath) {
  return config.map((it, i) => {
    const { path, children, component: Component, ...rest } = it;
    let newPath = basePath + path;
    return (
      <Route
        key={i}
        path={newPath}
        {...rest}
        render={(values) => {
          if (Array.isArray(children)) {
            return (
              <Component {...values}>
                <Switch>{getRoute(children, newPath)}</Switch>
              </Component>
            );
          } else {
            return <Component {...values} />;
          }
        }}
      />
    );
  });
}
