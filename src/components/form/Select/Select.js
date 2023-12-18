import styles from "./Select.module.css";

function Select({ text, name, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option hidden>Selecione uma opção</option>
        <option>PENDENTE</option>
        <option>FINALIZADA</option>
      </select>
    </div>
  );
}

export default Select;
