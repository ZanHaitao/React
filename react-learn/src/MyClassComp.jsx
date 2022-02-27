import React from "react";

export default class MyClassComp extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    if (this.props.obj) {
      return (
        <>
          <p>姓名：{this.props.obj.name}</p>
          <p>年龄：{this.props.obj.age}</p>
        </>
      );
    }
    return <h1>这是一个类组件：数字：{this.props.number}</h1>;
  }
}
