import React, { Component } from "react";
import "./index.scss";

export default class StudentSearchBar extends Component {
  constructor(props) {
    super(props);
    const def = {
      key: "",
      sex: -1,
    };
    this.state = {
      ...def,
      ...props.defaultVal,
    };
  }

  handleSearchClick = () => {
    if (this.state.key) {
      this.props.onSearch && this.props.onSearch(this.state);
    } else {
      this.setState(
        {
          ...this.state,
          sex: -1,
        },
        () => {
          this.props.onSearch && this.props.onSearch(this.state);
        }
      );
    }
  };

  render() {
    return (
      <div className="search">
        <label>
          关键词：
          <input
            type="text"
            value={this.state.key}
            onChange={(e) =>
              this.setState({ ...this.state, key: e.target.value })
            }
          />
        </label>
        <label className="search-sex">性别：</label>
        <label>
          <input
            type="radio"
            name="sex"
            value={-1}
            checked={this.state.sex === -1}
            onChange={() => this.setState({ ...this.state, sex: -1 })}
          />
          全部
        </label>
        <label>
          <input
            type="radio"
            name="sex"
            value={0}
            checked={this.state.sex === 0}
            onChange={() => this.setState({ ...this.state, sex: 0 })}
          />
          男
        </label>
        <label>
          <input
            type="radio"
            name="sex"
            value={1}
            checked={this.state.sex === 1}
            onChange={() => this.setState({ ...this.state, sex: 1 })}
          />
          女
        </label>
        <button className="search-btn" onClick={this.handleSearchClick}>
          查询
        </button>
      </div>
    );
  }
}
