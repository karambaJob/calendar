import React, { Component } from "react";

export default class TaskItem extends Component {
  render() {
    const { text, isCompleted } = this.props;

    return (
      <label>
        <input type="checkbox" checked={isCompleted} />
        {text}
      </label>
    );
  }
}
