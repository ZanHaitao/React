import React, { Component } from "react";
import types from "../../../util/commonTypes";
import PropTypes from "prop-types";
export default class CheckBoxGroup extends Component {
  static defaultProps = {
    list: [],
    chooes: [],
  };

  static propTypes = {
    list: types.groupTypes,
    chooes: types.chooes,
    name: PropTypes.string.isRequired,
  };

  handleChange = (e) => {
    let newArr = [];
    if (e.target.checked) {
      newArr = [...this.props.chooes, e.target.value];
    } else {
      newArr = this.props.chooes.filter((it) => it !== e.target.value);
    }
    this.props.onChange && this.props.onChange(newArr, this.props.name, e);
  };

  getCheckBoxList() {
    return this.props.list.map((it) => (
      <label key={it.value}>
        <input
          name={this.props.name}
          type="checkbox"
          value={it.value}
          checked={this.props.chooes.includes(it.value)}
          onChange={this.handleChange}
        />
        {it.text}
      </label>
    ));
  }

  render() {
    return <>{this.getCheckBoxList()}</>;
  }
}
