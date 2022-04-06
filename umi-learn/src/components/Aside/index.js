import React from 'react'
import CSSModule from "react-css-modules"
import styles from './index.css'
import { NavLink } from 'umi'

function Aside() {
  return (
    <ul styleName="nav-list">
      <li styleName="nav-item"> <NavLink exact activeClassName={styles.active} to={"/"}>网站首页</NavLink> </li>
      <li styleName="nav-item"> <NavLink exact activeClassName={styles.active} to={"/student"}>学生列表</NavLink> </li>
      <li styleName="nav-item"> <NavLink exact activeClassName={styles.active} to={"/student/add"}>添加学生</NavLink> </li>
    </ul>
  )
}
export default CSSModule(Aside, styles);