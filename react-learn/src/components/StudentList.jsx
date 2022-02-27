import React from "react";
import Student from "./Student";

export default class StudentList extends React.Component {
  render() {
    const students = this.props.stus.map((item) => (
      <Student key={item.id} {...item} />
    ));
    return <ul>{students}</ul>;
  }
}
