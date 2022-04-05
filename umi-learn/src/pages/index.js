import React from 'react'
import { getStudentDataAll } from '../services/student'
getStudentDataAll().then(res => {
  console.log(res);
})
function index() {
  return (
    <h1>首页</h1>
  )
}
index.title = "首页";
// index.wrappers = ["@/routes/HandleTitle.js"];
export default index