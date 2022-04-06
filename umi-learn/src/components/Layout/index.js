import React from 'react'
import CSSModules from "react-css-modules"
import styles from './index.css'

function Layout(props) {
  return (
    <>
      <header styleName="header">{props.header}</header>
      <div styleName="container">
        <div styleName="left">{props.aside}</div>
        <div styleName="right">{props.main}</div>
      </div>
    </>
  )
}

export default CSSModules(Layout, styles)