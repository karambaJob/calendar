import React, { Component } from "react";
import TaskItem from "../../components/TaskItem";
import style from "./TaskList.css";

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
  render() {
    const items = data.map(task => (
      <li key={task.id}>
        <TaskItem text={task.text} isCompleted={task.completed} />
      </li>
    ));
    return <ul className={style.list}>{items}</ul>;
  }
}
