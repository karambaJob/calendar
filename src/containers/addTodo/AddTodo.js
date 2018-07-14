import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "actions";

class AddTodo extends Component {
  render() {
    let input;
    const { dispatch, parent_id } = this.props;

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch(addTodo(input.value, parent_id));
            input.value = "";
          }}
        >
          <input ref={node => (input = node)} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
