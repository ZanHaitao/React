import React, { Component } from "react";
import { Provider } from "./FormContext";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

export default class Form extends Component {
  state = {
    formData: {},
    onChangeFormData: (name, value) => {
      this.setState({
        formData: {
          ...this.state.formData,
          [name]: value,
        },
      });
    },
    submit: () => {
      this.props.onSubmit && this.props.onSubmit(this.state.formData);
    },
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

Form.Input = FormInput;
Form.Button = FormButton;
