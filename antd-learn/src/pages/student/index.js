import React from 'react'
import StudentSearchBarContainer from '../../components/container/StudentSearchBarContainer'
import StudentTableContainer from '../../components/container/StudentTableContainer'

function index() {
  return (
    <>
      <StudentSearchBarContainer />
      <StudentTableContainer />
    </>
  )
}
index.title = "学生列表";
index.wrappers = ["@/wrappers/PrivatePage.js"]
export default index;