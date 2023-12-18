import styles from "./Home.module.css";

import LinkButton from "../../layout/LinkButton/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Tasks!</span>
      </h1>
      <p>Comece a gerenciar as suas tarefas agora mesmo!</p>
      <LinkButton to="/newtask" text="Criar tarefa"></LinkButton>
    </section>
  );
}

export default Home;
