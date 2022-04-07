import React from 'react'
import StudentForm from '../../components/StudentForm'

function add() {
  return (
    <StudentForm type="add"/>
  )
}

add.title = "添加学生";
add.wrappers = ["@/wrappers/PrivatePage.js"]
export default add;