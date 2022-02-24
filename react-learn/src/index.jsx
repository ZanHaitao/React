import React from "react";
import ReactDOM from "react-dom";

const arr = new Array(30);
arr.fill();
const html = "<h1>test</h1>";
const div = (
  <div>
    <p>{null}</p>
    <ul>
      {arr.map((item, i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
    <p
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    ></p>
  </div>
);

ReactDOM.render(div, document.getElementById("root"));
