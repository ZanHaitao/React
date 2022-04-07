import React from 'react'
import StudentForm from '../../components/StudentForm'

function EditStudent(props) {
  return (
    <StudentForm type="update" />
  )
}

EditStudent.title = "修改学生"
EditStudent.wrappers = ["@/wrappers/PrivatePage.js"]
export default EditStudent;