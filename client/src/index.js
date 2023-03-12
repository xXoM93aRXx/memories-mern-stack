import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./index.css";
const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
