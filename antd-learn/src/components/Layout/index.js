import React from 'react'
import styles from './index.css'
import { Layout } from 'antd'

const { Header, Content, Sider } = Layout;

export default function layout(props) {
  return (
    <>
      <Layout>
        <Header>{props.header}</Header>
        <Layout className={styles.main}>
          <Sider>{props.aside}</Sider>
          <Content className={styles.content}>{props.main}</Content>
        </Layout>
      </Layout>
    </>
  )
}