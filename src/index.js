import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "reducers";
import App from "./App";

const store = createStore(rootReducer);

store.dispatch({
  type: "ADD_TODO",
  text: "Init todo"
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
