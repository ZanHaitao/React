import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RootRouter from "./RootRouter";
import "./App.css";
import Link from "./EasyLink";

export default function App() {
  return (
    <div>
      <Router>
        <h1>
          <Link
            to={{
              name: "home",
            }}
          >
            首页
          </Link>
          <Link
            to={{
              name: "news",
            }}
          >
            新闻页
          </Link>
        </h1>
        <div>
          {/* 自动生成Route */}
          <RootRouter />
        </div>
      </Router>
    </div>
  );
}
