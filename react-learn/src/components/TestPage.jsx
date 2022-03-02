import React, { Component } from "react";
import Page from './Page'

export default class TestPage extends Component {
  state = {
    nowPage: 2,
    total: 10000,
    size: 10,
  };

  changePage = (page) => {
    this.setState({
      nowPage: page,
    });
  };

  render() {
    return <Page total={this.state.total} size={this.state.size} nowPage={this.state.nowPage} onChange={this.changePage}/>;
  }
}
