import React from "react";
import Footer from "./components/footer/Footer";
import AddTodo from "./containers/addTodo/AddTodo";
import VisibleTodoList from "./containers/visibleTodoList/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
