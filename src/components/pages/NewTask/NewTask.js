import { useNavigate } from "react-router-dom";

import styles from "./NewTask.module.css";

import TaskForm from "../../task/TaskForm/TaskForm";

function NewTask() {
  const navigate = useNavigate();

  function createTask(task) {
    fetch("http://localhost:8080/api/tasks", {
      method: "POST",
      body: task,
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/tasks", {
          state: { message: "Tarefa adicionada com sucesso!" },
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newtask_container}>
      <h1>Criar tarefa</h1>
      <p>Crie sua tarefa</p>
      <TaskForm handleSubmit={createTask} btnText="Criar tarefa" />
    </div>
  );
}

export default NewTask;
