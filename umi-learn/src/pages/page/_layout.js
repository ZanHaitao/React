import React from 'react'
import { NavLink } from "umi"


export default function Layout(props) {
  return (
    <div>
      <div>
        <NavLink to="/page">页面首页</NavLink>
        <NavLink to="/page/page1">页面1</NavLink>
        <NavLink to="/page/page2">页面2</NavLink>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}
