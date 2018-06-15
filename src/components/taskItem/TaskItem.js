import React, { Component } from "react";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { text, isCompleted } = this.props;

    return (
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={this.handleChange}
        />
        {text}
      </label>
    );
  }

  handleChange() {
    const { onChange, isCompleted, id } = this.props;
    onChange && onChange(id, !isCompleted);
  }
}
