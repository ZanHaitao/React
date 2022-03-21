import Modal from ".";
import React, { Component } from "react";

export default class Test extends Component {
  state = {
    showModal: false,
  };

  changeModalPanel = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <div>
        {this.state.showModal ? (
          <Modal onClose={this.changeModalPanel}>
            <div
              style={{
                width: 500,
                height: 300,
                background: "#fff",
              }}
            >
              Test
            </div>
          </Modal>
        ) : null}
        <button onClick={this.changeModalPanel}>显示</button>
      </div>
    );
  }
}
