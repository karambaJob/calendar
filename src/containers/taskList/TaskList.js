import React, { Component } from "react";
import TaskItem from "components/taskItem/TaskItem";
import TaskForm from "components/taskForm/TaskForm";
import style from "./TaskList.less";

const data = [
  {
    id: 1,
    text: "test text",
    completed: true
  },
  {
    id: 2,
    text: "test text3232",
    completed: false
  },
  {
    id: 3,
    text: "test text123",
    completed: true
  }
];

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    const items = this.state.data.map(task => (
      <li key={task.id}>
        <TaskItem
          text={task.text}
          isCompleted={task.completed}
          id={task.id}
          onChange={this.handleToggle}
        />
      </li>
    ));
    return (
      <div>
        <ul className={style.list}>{items}</ul>
        <TaskForm onSubmit={this.handleSubmit} />
      </div>
    );
  }

  handleSubmit(text) {
    const { data } = this.state;
    data.push({
      id: data.length + 1,
      text,
      completed: false
    });

    this.setState({
      data
    });
  }

  handleToggle(id, completed) {
    const { data } = this.state;
    const task = data.find(item => item.id === id);
    task.completed = completed;
    this.setState({ data });
  }
}
