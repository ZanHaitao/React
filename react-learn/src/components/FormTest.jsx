import React, { Component } from "react";

export default class FormTest extends Component {
  state = {
    loginId: "",
    loginPwd: "",
    chooseLoves: [],
    loves: ["篮球", "足球", "排球", "乒乓球"],
    sex: "male",
    city: "beijing",
  };

  handleChange = (e) => {
    let val = e.target.value;
    const name = e.target.name;

    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        val = [...this.state.chooseLoves, val];
      } else {
        val = this.state.chooseLoves.filter((it) => it !== val);
      }
    }

    this.setState({
      [name]: val,
    });
  };

  render() {
    return (
      <div>
        <p>
          <label>
            账号：
            <input
              type="text"
              name="loginId"
              value={this.state.loginId}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            密码：
            <input
              type="password"
              name="loginPwd"
              value={this.state.loginPwd}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            <input
              type="radio"
              value="male"
              name="sex"
              checked={this.state.sex === "male"}
              onChange={this.handleChange}
            />
            男
          </label>
          <label>
            <input
              type="radio"
              value="female"
              name="sex"
              checked={this.state.sex === "female"}
              onChange={this.handleChange}
            />
            女
          </label>
        </p>
        <p>
          <label>
            城市：
            <select
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            >
              <option value="beijing">北京</option>
              <option value="shanghai">上海</option>
              <option value="xiamen">厦门</option>
              <option value="fuzhou">福州</option>
            </select>
          </label>
        </p>
        <p>
          爱好：
          {this.state.loves.map((it) => (
            <label key={it}>
              <input
                type="checkbox"
                name="chooseLoves"
                value={it}
                checked={this.state.chooseLoves.includes(it)}
                onChange={this.handleChange}
              />
              {it}
            </label>
          ))}
        </p>
        <p>
          <button
            onClick={() => {
              console.log(this.state);
            }}
          >
            获取
          </button>
        </p>
      </div>
    );
  }
}
