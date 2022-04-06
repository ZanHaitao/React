import React, { useState } from 'react'
import { Button, Typography } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
const { Paragraph } = Typography;

export default function index() {
  const [text, setText] = useState("可编辑的")
  return (
    <div style={{
      marginTop: 200,
      textAlign: 'center'
    }}>
      <Button type='primary'>按钮</Button>
      <Button type='danger' shape="circle"><SearchOutlined /></Button>
      <Button.Group>
        <Button type='primary'>Large</Button>
        <Button type='primary'>Default</Button>
        <Button type='primary'>Small</Button>
      </Button.Group>
      <div>
        <Paragraph editable={{
          onChange: (text) => {
            setText(text)
          }
        }}>{text}</Paragraph>
      </div>
      <div>
        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph
          copyable={{
            tooltips: ['点击复制', '复制成功'],
          }}
        >
          Custom Copy icon and replace tooltips text.
        </Paragraph>
      </div>
    </div>
  )
}
