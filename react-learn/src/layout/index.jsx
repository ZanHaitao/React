import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function Layout(props) {
  return (
    <div className="container">
      <header className="header">{props.header}</header>
      <div className="middle">
        <aside className="aside">{props.aside}</aside>
        <main className="main">{props.children}</main>
      </div>
    </div>
  );
}

Layout.propTypes = {
  header: PropTypes.element,
  aside: PropTypes.element,
  children: PropTypes.element,
};
