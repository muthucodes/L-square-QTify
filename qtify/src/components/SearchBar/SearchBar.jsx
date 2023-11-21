import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import styles from "./SearchBar.module.css";
export default function SearchBar() {
  return (
    <>
      <form className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search a song of your choice"
          required
          className={styles.input}
        />
        <button className={styles.button} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
}
