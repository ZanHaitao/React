import React, { useRef } from 'react'
import CSSModule from "react-css-modules"
import styles from './index.css'
import { Form, Input, Button } from 'antd'

function LoginForm(props) {

  const onFinish = (data) => {
    props.onLogin && props.onLogin(data.loginId, data.loginPwd);
  }
  return (
    <div styleName='login-container'>
      <Form
        onFinish={onFinish}
      >
        <Form.Item label="账号：" name="loginId" rules={[{
          required: true,
          message: "请输入账号"
        }]}>
          <Input />
        </Form.Item>
        <Form.Item label="密码：" name="loginPwd" rules={[{
          required: true,
          message: "请输入密码"
        }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='sumbit'>登录</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CSSModule(LoginForm, styles)