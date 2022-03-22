import React from "react";
import withLog from "./withLog";
import withLogin from "./withLogin";
class TestHoc extends React.Component {
  render() {
    return <div>TestHoc</div>;
  }
}
let NewComp = withLog(TestHoc);
NewComp = withLogin(NewComp);

export default class Test extends React.Component {
  state = {
    login: true,
  };
  render() {
    return (
      <>
        <NewComp login={this.state.login} />
        <button
          onClick={() => {
            this.setState({
              login: !this.state.login,
            });
          }}
        >
          登录/注销
        </button>
      </>
    );
  }
}
