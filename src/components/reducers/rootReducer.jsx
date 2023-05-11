import { combineReducers } from "redux";
import numberGameReducer from "./numberGameReducer";

const rootReducer = combineReducers({
  numberGame: numberGameReducer,
});

export default rootReducer;
