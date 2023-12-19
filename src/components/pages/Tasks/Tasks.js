import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "../Tasks/Tasks.module.css";

import Message from "../../layout/Message/Message";
import Container from "../../layout/Container/Container";
import Loading from "../../layout/Loading/Loading";
import LinkButton from "../../layout/LinkButton/LinkButton";

import TaskCard from "../../task/TaskCard/TaskCard";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [taskMessage, setTaskMessage] = useState("");

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8080/api/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setTasks(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  function removeTask(id) {
    fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
        setTaskMessage("Tarefa removida com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.task_container}>
      <div className={styles.title_container}>
        <h1>Minhas tarefas</h1>
        <LinkButton to="/newtask" text="Criar tarefa"></LinkButton>
      </div>
      {message && <Message type="success" msg={message} />}
      {taskMessage && <Message type="success" msg={taskMessage} />}
      <Container customClass="start">
        {tasks.length > 0 &&
          tasks.map((task) => (
            <TaskCard
              id={task.id}
              description={task.description}
              hasImage={task.linkImage}
              status={task.status}
              key={task.id}
              handleRemove={removeTask}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && tasks.length === 0 && (
          <p>Não há tarefas cadastradas!</p>
        )}
      </Container>
    </div>
  );
}

export default Tasks;
