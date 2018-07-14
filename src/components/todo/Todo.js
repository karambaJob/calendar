import React, { Component } from "react";
import style from "./todo.less";
import AddTodo from "containers/addTodo/AddTodo";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddForm: false
    };

    this.handleAddClick = this.handleAddClick.bind(this);
  }

  render() {
    const { onClick, completed, text, id } = this.props;
    const { showAddForm } = this.state;

    const className = completed
      ? [style.item, style["item--completed"]].join(" ")
      : style.item;

    return (
      <div>
        <div className={className}>
          <div className={style.add} onClick={this.handleAddClick}>
            +
          </div>
          <div onClick={onClick} className={style.text}>
            {text}
          </div>
        </div>
        {showAddForm && <AddTodo parent_id={id} />}
      </div>
    );
  }

  handleAddClick() {
    this.setState({
      showAddForm: !this.state.showAddForm
    });
  }
}

export default Todo;
