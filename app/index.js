import React from 'react';
import { Provider } from "react-redux";
import RobotSimulator from "./containers/RobotSimulator";
import configureStore from "./store/configure-store";

const store = configureStore();

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RobotSimulator/>
      </Provider>
    );
  }
}
