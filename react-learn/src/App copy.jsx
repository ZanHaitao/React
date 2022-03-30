import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Page1() {
  return <h1>首页</h1>;
}
class Page2 extends React.Component {
  state = {
    value: "",
  };

  handleBlock(value) {
    if (value !== "") {
      this.unBlock =
        this.props.history.block("监测到当前文本框有数据是否跳转？");
    }
  }

  componentWillUnmount() {
    this.unBlock && this.unBlock();
  }

  render() {
    return (
      <textarea
        value={this.state.value}
        onChange={(e) => {
          this.setState({
            value: e.target.value,
          });
          this.handleBlock();
        }}
      ></textarea>
    );
  }
}

export default function App() {
  return (
    <div>
      <Router>
        <h1>
          <Link to={"/page1"}>页面1</Link>
          <Link to={"/page2"}>页面2</Link>
        </h1>
        <div>
          <Route path={"/page1"} component={Page1} />
          <Route path={"/page2"} component={Page2} />
        </div>
      </Router>
    </div>
  );
}
