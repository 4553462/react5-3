import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import NumberGame from "./NumberGame";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NumberGame />
    </Provider>
  );
};

export default  App;
