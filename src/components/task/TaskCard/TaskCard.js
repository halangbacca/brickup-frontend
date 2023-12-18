import { Link } from "react-router-dom";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

import styles from "./TaskCard.module.css";

function TaskCard({ id, description, image, status, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.task_card}>
      <h4>{description}</h4>
      <p>{image}</p>
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
