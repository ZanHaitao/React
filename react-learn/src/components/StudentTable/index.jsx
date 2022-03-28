import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.css";

export default function StudentTable(props) {
  const list = useMemo(() => {
    return props.stus.map((it) => {
      return (
        <tr key={it.id}>
          <td>{it.sNo}</td>
          <td>{it.name}</td>
          <td>{it.sex == 0 ? "男" : "女"}</td>
          <td>{it.birth}</td>
          <td>{it.phone}</td>
          <td>{it.address}</td>
          <td>{it.email}</td>
          <td>
            <Link to={`/students/${it.sNo}`}>详情</Link>
          </td>
        </tr>
      );
    });
  }, [props.stus]);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>出生年份</th>
          <th>手机号</th>
          <th>住址</th>
          <th>邮箱</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
}
StudentTable.propTypes = {
  stus: PropTypes.array,
};
