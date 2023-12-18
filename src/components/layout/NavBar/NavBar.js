import { Link } from "react-router-dom";

import Container from "../Container/Container";

import styles from "./NavBar.module.css";

import logo from "../../../img/tasks.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Tasks"></img>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/tasks">Tarefas</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
