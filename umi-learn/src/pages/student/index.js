import React from 'react'
import StudentSearchBarContainer from '../../components/container/StudentSearchBarContainer'
import StudentTableContainer from '../../components/container/StudentTableContainer'
import StudentPagerContainer from '../../components/container/StudentPagerContainer'

function index() {
  return (
    <>
      <StudentSearchBarContainer />
      <StudentTableContainer />
      <StudentPagerContainer />
    </>
  )
}
index.title = "学生列表";
export default index;