import React from 'react';
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store/configure-store";

const store = configureStore();

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}
