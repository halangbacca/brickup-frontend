import { all, call, put, takeLatest } from "redux-saga/effects";

import { taskApi } from "../api/taskApi";

import { ACTIONS } from "../constants/taskConstants";

import { taskActions } from "../actions/taskActions";

function* getListRequested() {
  const tasks = yield call(taskApi.getAll);
  yield put(taskActions.getAll(tasks));
}

function* watchRequestGetList() {
  yield takeLatest(ACTIONS.TASK_REQUEST_GET_ALL, getListRequested);
}

function* taskSagas() {
  yield all([watchRequestGetList()]);
}

export { taskSagas };
