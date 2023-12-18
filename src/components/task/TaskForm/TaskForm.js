import { useState } from "react";

import styles from "./TaskForm.module.css";

import Input from "../../form/Input/Input";
import Select from "../../form/Select/Select";
import SubmitButton from "../../form/SubmitButton/SubmitButton";

function TaskForm({ handleSubmit, btnText, taskData }) {
  const [task, setTask] = useState(taskData || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(task);
  };

  function handleChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Descrição da tarefa"
        name="description"
        placeholder="Insira a descrição da tarefa"
        handleOnChange={handleChange}
        value={task.description ? task.description : ""}
      />
      <Input
        type="text"
        text="Imagem"
        name="image"
        placeholder="Insira uma imagem"
        handleOnChange={handleChange}
        value={task.image ? task.image : ""}
      />
      <Select
        name="status"
        text="Selecione o status"
        handleOnChange={handleChange}
        value={task.status ? task.status : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default TaskForm;
