import React, { useState } from 'react'
import styles from './index.css'
import { Upload, Button, Spin } from 'antd'
import { UploadOutlined } from '@ant-design/icons';

export default function Avatar(props) {
  const [loading, setLoading] = useState(false)
  return (
    <div className={styles.avatar}>
      <Spin spinning={loading}>
        <Upload
          accept=".jpg,.png,.gif"
          action="/api/upload"
          name='imagefile'
          listType="picture-card"
          showUploadList={false}
          beforeUpload={() => {
            setLoading(true)
          }}
          onChange={(data) => {
            if (data.file.response) {
              const path = data.file.response.path;
              props.onChange(path);
              setLoading(false);
            }
          }}>
          {getUploadContainer(props.value)}
        </Upload>
      </Spin>
    </div>
  )
}


function getUploadContainer(imgUrl) {
  if (imgUrl) {
    return <img src={imgUrl} alt="" />
  }
  return <Button type='primary' icon={<UploadOutlined />}>上传</Button>
}