import uuidv1 from "uuid/v1";

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (action.parentId) {
        const todo = state.find(todo => todo.id === action.parentId);
        if (todo) {
          if (!todo.items) {
            
          }
        }
        break;
      }
      return [
        ...state,
        {
          id: uuidv1(),
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
