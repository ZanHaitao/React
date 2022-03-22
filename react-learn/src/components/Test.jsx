import React, { Component } from "react";
import Form from "./common/Form";

export default class Test extends Component {
  render() {
    return (
      <div>
        <Form
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          <div>
            <label>
              账号：
              <Form.Input name="loginId" type="text" />
            </label>
          </div>
          <div>
            <label>
              密码：
              <Form.Input name="loginPwd" type="password" />
            </label>
          </div>
          <div>
            <Form.Button>提交</Form.Button>
          </div>
        </Form>
      </div>
    );
  }
}
