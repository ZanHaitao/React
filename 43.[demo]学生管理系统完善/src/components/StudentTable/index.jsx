import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default class StudentTable extends Component {
  static defaultProps = {
    stus: [],
  };

  static propTypes = {
    stus: PropTypes.arrayOf(PropTypes.shape()),
  };

  getTrs = () => {
    return this.props.stus.map((it) => (
      <tr key={it.id}>
        <td>{it.id}</td>
        <td>{it.name}</td>
        <td>{it.sex ? "女" : "男"}</td>
        <td>{it.birth}</td>
        <td>{it.email}</td>
        <td>{it.address}</td>
        <td>{it.phone}</td>
        <td>
          <button
            onClick={() => {
              this.props.enterDetail && this.props.enterDetail(it.id);
            }}
          >
            详情
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>生日</th>
            <th>邮箱</th>
            <th>地址</th>
            <th>联系方式</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>{this.getTrs()}</tbody>
      </table>
    );
  }
}
