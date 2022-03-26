import React from "react";

export default function StudentList({ stus }) {
  const students = stus.map((it) => {
    return (
      <li key={it.id}>
        姓名：{it.name}、性别：{it.sex ? "男" : "女"}、地址：{it.address}
      </li>
    );
  });
  return <>{students}</>;
}
