import React from "react";
import style from "./todo.less";
import TodoList from "components/todoList/TodoList";

const Todo = ({ onClick, onAdd, completed, text, items = [] }) => {
  const className = completed
    ? [style.item, style["item--completed"]].join(" ")
    : style.item;

  return (
    <div className={className}>
      <div onClick={onClick} className={style.text}>
        {text}
      </div>
      <div>sub</div>
      {items.length > 0 && <TodoList todos={items} toggleTodo={onClick} />}
    </div>
  );
};

export default Todo;
