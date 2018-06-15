import React, { Component } from "react";

export default class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>add</button>
      </div>
    );
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    const { text } = this.state;
    if (text !== "" && onSubmit) {
      onSubmit(this.state.text);
      this.setState({
        text: ""
      });
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
}
