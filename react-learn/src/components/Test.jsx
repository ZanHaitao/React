import React from "react";
import TestDefaultProps from "./TestDefaultProps";

export default function Test() {
  return <TestDefaultProps a="1" b="123" c={1} d={{name:"张三",age:1}}/>;
}
