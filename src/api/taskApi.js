const taskApi = {
  getAll: () =>
    fetch("http://localhost:8080/api/tasks").then((resp) => resp.json()),
};

export { taskApi };
