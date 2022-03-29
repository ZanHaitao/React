import React from "react";
import Link from "../EasyLink";

export default function News(props) {
  return (
    <div>
      <h1>
        <Link to={{ name: "newsHome" }}>新闻首页</Link>
        <Link to={{ name: "newsList" }}>新闻列表页</Link>
        <Link to={{ name: "newsDetail" }}>新闻详情页</Link>
      </h1>
      <div>{props.children}</div>
    </div>
  );
}
