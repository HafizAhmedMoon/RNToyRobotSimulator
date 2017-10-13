import { createStore } from "redux";
import rootReducer from "./root-reducers";

export default function configureStore(initialState) {

  let store = createStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./root-reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
