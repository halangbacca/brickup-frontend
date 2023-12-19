import { ACTIONS } from "../constants/taskConstants";

const INITIAL_STATE = {
  tasks: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  const { tasks } = state;

  switch (type) {
    case ACTIONS.TASK_ADD:
      return { ...state, tasks: [...tasks, payload] };
    case ACTIONS.TASK_UPDATE:
    case ACTIONS.TASK_GET_ALL:
      return { ...state, tasks: payload };
    case ACTIONS.TASK_DELETE:
      return { ...state, tasks: tasks.filter((task) => task !== payload) };
    default:
      return state;
  }
};

export { taskReducer };
