import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <>
      <ul className={styles.ul}>
        <li>
          <a href="./index">Home</a>
        </li>
        <li>
          <a href="./resume">News</a>
        </li>
        <li>
          <a href="./projects">Contact</a>
        </li>
      </ul>
    </>
  );
}
