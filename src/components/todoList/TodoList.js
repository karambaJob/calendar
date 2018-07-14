import React, { Component } from "react";
import Todo from "../todo/Todo";
import styles from "./todoList.less";
import AddTodo from "containers/addTodo/AddTodo";

class TodoList extends Component {
  render() {
    const { todos, toggleTodo } = this.props;
    const todosCopy = JSON.parse(JSON.stringify(todos));
    let todosParents = todosCopy.filter(todo => todo.parent_id === null);
    todosCopy.forEach(todo => {
      const parentId = todo.parent_id;
      if (parentId) {
        const curParent = todosCopy.find(todo => todo.id === parentId);
        if (!curParent) {
          return;
        }
        if (!curParent.items) {
          curParent.items = [];
        }
        curParent.items.push(todo);
      }
    });
    return this.renderList(todosParents, toggleTodo);
  }

  renderList(todos, toggleTodo) {
    if (!todos || todos.length === 0) {
      return null;
    }
    return (
      <ul className={styles.list}>
        {todos.map(todo => (
          <li key={todo.id}>
            <Todo {...todo} onClick={() => toggleTodo(todo.id)} />
            {todo.items &&
              todo.items.length > 0 &&
              this.renderList(todo.items, toggleTodo)}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
