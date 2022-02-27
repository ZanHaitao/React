import React from "react";

export default function Student(props) {
  return (
    <li>
      【姓名】：{props.name}, 【Email】：{props.email}, 【地址】：
      {props.address}, 【手机号】：{props.phone}, 【性别】：
      {props.sex === 1 ? "男" : "女"}
    </li>
  );
}
