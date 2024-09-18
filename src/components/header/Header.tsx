import styles from './header.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <button>Home</button>
        <button>Band</button>
        <button>Tour</button>
        <button>Contact</button>
      </div>

      <i className={`${styles.searchIcon} fas fa-search`} />
    </div>
  );
}
