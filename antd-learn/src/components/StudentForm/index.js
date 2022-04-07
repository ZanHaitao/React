import React, { useMemo, useEffect, useState } from 'react'
import { Form, Input, Button, Radio, Select, message, Spin } from 'antd'
import { addStudent, findStudnetById, updateStudent } from '../../services/student';
import { withRouter } from 'umi'

function StudentAddForm(props) {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    /**
     * 处理修改初始化数据
     */
    (async () => {
      if (props.type === "update") {
        setIsLoading(true)
        const data = await findStudnetById(props.match.params.id);
        delete data.appkey;
        delete data.ctime;
        delete data.utime;
        delete data.id;
        const FieldsData = handleFieldsData(data);
        form.setFields(FieldsData);
        setIsLoading(false)
      }
    })()
  }, [])

  /**
   * 验证成功触发
   */
  const onFinish = (data) => {
    if (props.type === "add") {
      add(data);
    } else {
      update(data);
    }
  }
  /**
   * 验证失败触发
   * @param {*} err 
   */
  const onFinishFailed = (err) => {
    console.log(err);
  }

  /**
   * 添加学生
   * @param {*} data 
   */
  const add = async (data) => {
    setIsLoading(true);
    const resp = await addStudent(data);
    if (resp.status === "success") {
      //添加成功
      await message.success(resp.msg, 1);
      props.history.push("/student")
    } else {
      //添加失败
      message.error(resp.msg, 1);
      setIsLoading(false);
    }
  }

  const update = async (data) => {
    setIsLoading(true);
    const resp = await updateStudent(data);
    if (resp.status === "success") {
      //修改成功
      await message.success(resp.msg, 1);
      props.history.push("/student")
    } else {
      //修改失败
      message.error(resp.msg, 1);
      setIsLoading(false);
    }
  }

  /**
   * 获取select的option元素列表
   */
  const options = useMemo(() => {
    const options = [];
    for (let i = 1960; i < 2022; i++) {
      options.push(<Select.Option key={i} value={i}>{i}年</Select.Option>)
    }
    return options;
  }, [])

  return (
    <Spin tip="加载中..." spinning={isLoading}>
      <Form
        form={form}
        labelCol={{
          span: 2
        }}
        wrapperCol={{
          span: 6
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item label="学号：" name="sNo" rules={[
          { required: true, message: "学号必须填写" }
        ]}>
          <Input disabled={props.type === "update"} />
        </Form.Item>
        <Form.Item label="姓名：" name="name" rules={[
          { required: true, message: "姓名必须填写" }
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="性别：" name="sex" rules={[
          { required: true, message: "出生年份必须填写" }
        ]} initialValue={0}>
          <Radio.Group>
            <Radio.Button value={0}>男</Radio.Button>
            <Radio.Button value={1}>女</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="出生年份：" name="birth" rules={[
          { required: true, message: "出生年份必须填写" }
        ]}>
          <Select>
            {options}
          </Select>
        </Form.Item>
        <Form.Item label="手机号：" name="phone" rules={[
          { required: true, message: "手机号必须填写" },
          { pattern: /^1(3[0-9]|5[0-3,5-9]|7[1-3,5-8]|8[0-9])\d{8}$/, message: "手机号格式不正确" }
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="家庭住址：" name="address" rules={[
          { required: true, message: "家庭住宅必须填写" }
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="邮箱：" name="email" rules={[
          { required: true, message: "邮箱必须填写" },
          { pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: "邮箱格式不正确" }
        ]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{
          offset: 2
        }}>
          <Button htmlType="submit" type='primary'>提交</Button>
        </Form.Item>
      </Form>
    </Spin>
  )
}

/**
 * 处理FieldsData数据
 * @param {*} obj 
 * @returns 
 */
function handleFieldsData(obj) {
  const result = [];
  for (const key in obj) {
    result.push({
      name: key,
      value: obj[key]
    })
  }
  return result
}


export default withRouter(StudentAddForm);