import React from "react";
import ReactDOM from "react-dom";
import StudentList from "./components/StudentList";
const appkey = "15556677737_1585147447159";

async function fetchAllStudents() {
  const stus = await fetch(
    "http://open.duyiedu.com/api/student/findAll?appkey=" + appkey
  )
    .then((res) => res.json())
    .then((res) => res.data);
  console.log(stus);
  return stus;
}

async function render() {
  ReactDOM.render("加载中...", document.getElementById("root"));
  const stus = await fetchAllStudents();
  ReactDOM.render(<StudentList stus={stus} />, document.getElementById("root"));
}

render();