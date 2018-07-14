import React from "react";
import Todo from "../todo/Todo";
import styles from "./todoList.less";

const TodoList = ({ todos, toggleTodo }) => (
  <ul className={styles.list}>
    {todos.map(todo => (
      <li key={todo.id}>
        <Todo {...todo} onClick={() => toggleTodo(todo.id)} />
      </li>
    ))}
  </ul>
);

export default TodoList;
