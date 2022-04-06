import React from 'react'
import StudentSearchBarContainer from '../../components/container/StudentSearchBarContainer'
import StudentTableContainer from '../../components/container/StudentTableContainer'
import StudentPagerContainer from '../../components/container/StudentPagerContainer'
import StudentLoadingContainer from '../../components/container/StudentLoadingContainer'

function index() {
  return (
    <>
      <StudentSearchBarContainer />
      <StudentTableContainer />
      <StudentPagerContainer />
      <StudentLoadingContainer />
    </>
  )
}
index.title = "学生列表";
index.wrappers = ["@/wrappers/PrivatePage.js"]
export default index;