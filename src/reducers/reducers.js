import { combineReducers } from "redux";

import { taskReducer } from "./taskReducer";

const reducers = combineReducers({
  taskReducer,
});

export { reducers };
