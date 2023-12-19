import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { BsPencil, BsFillTrashFill, BsCardImage } from "react-icons/bs";

import { store } from "../../../reducers/store";

import { taskActions } from "../../../actions/taskActions";

import styles from "./TaskCard.module.css";

function TaskCard({ id, description, status, hasImage, handleRemove }) {
  const [image, setImage] = useState([]);

  const remove = (e) => {
    e.preventDefault();
    store.dispatch(taskActions.remove(id));
    handleRemove(id);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/tasks/${id}/image`, {
      method: "GET",
    })
      .then((resp) => {
        if (resp.ok) {
          setImage(resp.url);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={styles.task_card}>
      <h4>{description}</h4>

      {hasImage !== null && (
        <a href={image}>
          <BsCardImage />
        </a>
      )}

      <p>{status}</p>
      <div className={styles.task_card_actions}>
        <Link to={`/task/${id}`}>
          <BsPencil />
          Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
