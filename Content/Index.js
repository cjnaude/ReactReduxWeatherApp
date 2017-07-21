import "bootstrap/dist/css/bootstrap.css";
import "./components/site.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configure-store";
import App from "./containers/app";

let store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

/* eslint-disable no-undef*/
// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
/* eslint-enable no-undef */