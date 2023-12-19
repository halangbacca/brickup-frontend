import createSagaMiddleware from "redux-saga";

import { applyMiddleware, createStore } from "redux";

import { reducers } from "./reducers";

import { taskSagas } from "../sagas/taskSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(taskSagas);

export { store };
