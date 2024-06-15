import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartStore from "./reduxStore/CartStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={CartStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
