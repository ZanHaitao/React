import React from "react";
import ReactDOM from "react-dom";
import MyFuncComp from "./MyFuncComp";
import MyClassComp from "./MyClassComp";

ReactDOM.render(
  <div>
    <MyFuncComp number={1} />
    <MyFuncComp number={2} />
    <MyFuncComp number={3} />
    <MyFuncComp number={4} />
    <MyFuncComp number={5} />
    <MyClassComp number={1} />
    <MyClassComp
      obj={{
        name: "张三",
        age: 15,
      }}
    />
    <MyClassComp number={2} />
    <MyClassComp number={3} />
    <MyClassComp number={5} />
  </div>,
  document.getElementById("root")
);
