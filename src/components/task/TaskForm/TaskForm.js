import { useState } from "react";

import styles from "./TaskForm.module.css";

import { store } from "../../../reducers/store";

import { taskActions } from "../../../actions/taskActions";

import { connect } from "react-redux";

import Input from "../../form/Input/Input";
import Select from "../../form/Select/Select";
import SubmitButton from "../../form/SubmitButton/SubmitButton";

function TaskForm({ handleSubmit, btnText, taskData }) {
  const [task, setTask] = useState(taskData || {});

  const submit = (e) => {
    e.preventDefault();
    var img = e.target[1].files[0];

    const formData = new FormData();
    formData.append("description", task.description);
    formData.append("image", img);

    if (task.status !== undefined) {
      formData.append("status", task.status);
    } else {
      formData.append("status", "PENDENTE");
    }

    store.dispatch(taskActions.add(task));
    handleSubmit(formData);
  };

  function handleChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  return (
    <form
      onSubmit={submit}
      className={styles.form}
      encType="multipart/form-data"
    >
      <Input
        type="text"
        text="Descrição da tarefa"
        name="description"
        placeholder="Insira a descrição da tarefa"
        required="true"
        handleOnChange={handleChange}
        value={task.description ? task.description : ""}
      />
      <Input
        type="file"
        text="Envie uma imagem"
        name="image"
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

const mapStateToProps = (state) => ({
  tasks: state.taskReducer.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  add: (task) => dispatch(taskActions.add(task)),
  getAll: () => dispatch(taskActions.requestGetAll()),
  remove: (task) => dispatch(taskActions.remove(task)),
  update: (task) => dispatch(taskActions.update(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
