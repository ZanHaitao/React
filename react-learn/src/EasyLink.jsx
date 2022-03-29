import React from "react";
import { Link } from "react-router-dom";
import routerConfig from "./routerConfig";

export default function EasyLink(props) {
  const { to, ...rest } = props;
  if (to.name && typeof to != "string") {
    return (
      <Link
        to={{
          pathname: getPath(routerConfig, to.name, ""),
        }}
      >
        {rest.children}
      </Link>
    );
  }
  return <Link to={to}>{rest.children}</Link>;
}

/**
 * 在配置文件中通过 name 查找 path
 * @param {*} config
 * @param {*} name
 * @param {*} basePath
 * @returns
 */
function getPath(config, name, basePath) {
  for (const props of config) {
    const newPath = basePath + props.path;
    if (props.name === name) {
      return newPath;
    }
    if (Array.isArray(props.children)) {
      const path = getPath(props.children, name, newPath);
      if (path !== "") {
        return path;
      }
    }
  }
  return "";
}
