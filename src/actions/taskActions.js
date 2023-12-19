import { ACTIONS } from "../constants/taskConstants";

const taskActions = {
  add: (task) => ({
    paylod: task,
    type: ACTIONS.TASK_ADD,
  }),

  update: (task) => ({
    paylod: task,
    type: ACTIONS.TASK_UPDATE,
  }),

  getAll: (task) => ({
    paylod: task,
    type: ACTIONS.TASK_GET_ALL,
  }),

  requestGetAll: (task) => ({
    paylod: task,
    type: ACTIONS.TASK_REQUEST_GET_ALL,
  }),

  remove: (task) => ({
    paylod: task,
    type: ACTIONS.TASK_DELETE,
  }),
};

export { taskActions };
