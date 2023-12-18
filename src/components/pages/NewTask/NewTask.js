import { useNavigate } from "react-router-dom";

import { useState } from "react";

import Message from "../../layout/Message/Message";

import styles from "./NewTask.module.css";

import TaskForm from "../../task/TaskForm/TaskForm";

function NewTask() {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  function createTask(task) {
    if (task.description === undefined) {
      setMessage("A descrição é obrigatória!");
      setType("error");
      return;
    }

    fetch("http://localhost:8080/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((resp) => resp.json())
      .then(() => {
        navigate("/tasks", {
          state: { message: "Tarefa adicionada com sucesso!" },
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newtask_container}>
      {message && <Message type={type} msg={message} />}
      <h1>Criar tarefa</h1>
      <p>Crie sua tarefa</p>
      <TaskForm handleSubmit={createTask} btnText="Criar tarefa" />
    </div>
  );
}

export default NewTask;
