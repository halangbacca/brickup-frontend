import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://github.com/halangbacca" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/halanbacca/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Halan Germano Bacca</span>&copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
