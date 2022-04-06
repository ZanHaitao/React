import React from 'react'
import Layout from '../components/Layout'
import HeaderContainer from '../components/container/HeaderContainer'
import Aside from '../components/Aside'

export default function layout(props) {
  if (props.location.pathname === "/login") {
    return props.children
  }
  return (
    <Layout header={<HeaderContainer />} aside={<Aside />} main={props.children} />
  )
}
