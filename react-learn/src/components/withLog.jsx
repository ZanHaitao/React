import React from "react";

export default function withLog(Comp) {
  return class LogWrapper extends React.Component {
    componentDidMount() {
      console.log(Comp.name + "组件挂载完成！");
    }
    componentWillUnmount() {
      console.log(Comp.name + "组件销毁了！");
    }
    render() {
      return <Comp {...this.props} />;
    }
  };
}
