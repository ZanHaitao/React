import React from 'react'
import CSSModule from "react-css-modules"
import styles from './index.css'
import { Row, Col, Button } from 'antd'
import { LoginOutlined } from '@ant-design/icons';

function Header(props) {
  return (
    <Row className={styles.header} justify="space-between">
      <Col>
        <h1>欢迎使用学生管理系统</h1>
      </Col>
      <Col>
        <span className={styles.flag}>欢迎你</span>
        <span className={styles.flag}>{props.loginUser}</span>
        <Button size='small' shape="circle" icon={<LoginOutlined />} type="primary" onClick={() => {
          props.onLoginOut && props.onLoginOut()
        }} title="注销登录"/>
      </Col>
    </Row>
  )
}

export default CSSModule(Header, styles);