import React from 'react'

function EditStudent(props) {
  return (
    <>
      <h1>修改学生</h1>
      <h1>学号：{props.match.params.id}</h1>
    </>
  )
}

EditStudent.title = "修改学生"
export default EditStudent;