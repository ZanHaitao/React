import React from "react";
import { Link } from "umi";
import PropTypes from "prop-types";
import { Table, ConfigProvider, Empty } from 'antd'

import { RobotOutlined } from '@ant-design/icons';

const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center', margin: "40px 0" }}>
    <Empty description="暂无数据" />
  </div>
);
export default function StudentTable(props) {

  const columns = [{
    title: "学号",
    dataIndex: "sNo"
  }, {
    title: "姓名",
    dataIndex: "name"
  }, {
    title: "性别",
    dataIndex: "sex",
    render(sex) {
      return sex === 1 ? "女" : "男"
    }
  }, {
    title: "出生年份",
    dataIndex: "birth"
  }, {
    title: "手机号",
    dataIndex: "phone"
  }, {
    title: "住宅",
    dataIndex: "address"
  }, {
    title: "邮箱",
    dataIndex: "email"
  }, {
    title: "操作",
    dataIndex: "sNo",
    render(sNo) {
      return <Link style={{
        color: "#008c8c"
      }} to={`/student/${sNo}`}>详情</Link>
    }
  }]

  return <ConfigProvider renderEmpty={customizeRenderEmpty}>
    <Table
      dataSource={props.stus}
      columns={columns}
      rowKey={"id"}
      loading={props.loading}
      pagination={{
        current: props.current,
        total: props.total,
        pageSize: props.pageSize,
        showSizeChanger: false,
        position: ["bottomCenter"],
        onChange(newPage) {
          props.onChange(newPage)
        }
      }} />
  </ConfigProvider>

}
StudentTable.propTypes = {
  stus: PropTypes.array,
};