import React from 'react'
import { NavLink } from 'umi'

export default function Layout(props) {
  return (
    <div>
      <div>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/page">页面首页</NavLink>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}
