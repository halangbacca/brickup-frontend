import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Loading from "../../layout/Loading/Loading";
import Container from "../../layout/Container/Container";
import Message from "../../layout/Message/Message";

import TaskForm from "../../task/TaskForm/TaskForm";

import styles from "./Task.module.css";

function Task() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [task, setTask] = useState([]);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8080/api/tasks/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setTask(data);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function editTask(task) {
    setMessage("");

    if (task.description === "") {
      setMessage("A descrição é obrigatória!");
      setType("error");
      return;
    }

    fetch(`http://localhost:8080/api/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTask(data);
        setMessage("Tarefa atualizada com sucesso!");
        setType("success");

        setTimeout(() => {
          navigate("/tasks");
        }, 500);
      })

      .catch((err) => console.log(err));
  }

  return (
    <>
      {task.description ? (
        <div className={styles.task_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Tarefa: {task.description}</h1>

              <Link to="/tasks">
                <button className={styles.btn}>Fechar</button>
              </Link>

              <div className={styles.task_info}>
                <TaskForm
                  handleSubmit={editTask}
                  btnText="Concluir edição"
                  taskData={task}
                />
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Task;
