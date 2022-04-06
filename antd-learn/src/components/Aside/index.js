import React from 'react'
import { NavLink, withRouter } from 'umi'
import { Menu } from 'antd';

const { SubMenu } = Menu;

function Aside(props) {
  const pathname = props.location.pathname;
  const subMenu = ["student"];
  const openSubMenu = subMenu.filter(it => pathname.indexOf(it) !== -1);
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[pathname]}
      defaultOpenKeys={[...openSubMenu]}>
      <Menu.Item key={"/"}>
        <NavLink exact to={"/"}>网站首页</NavLink>
      </Menu.Item>
      <SubMenu title="学生管理" key="student">
        <Menu.Item key={"/student"}>
          <NavLink exact to={"/student"}>学生列表</NavLink>
        </Menu.Item>
        <Menu.Item key={"/student/add"}>
          <NavLink exact to={"/student/add"}>添加学生</NavLink>
        </Menu.Item>
      </SubMenu>
    </Menu>
  )
}
export default withRouter(Aside);