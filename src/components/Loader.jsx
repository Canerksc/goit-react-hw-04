
import styles from "./Loader.module.css";

export default function Loader({ count = 12 }) {
  return (
    <ul className={styles.gallery}>
      {Array.from({ length: count }).map((_, idx) => (
        <li key={idx} className={styles.skeletonCard}>
          <div className={styles.skeletonImage}></div>
          <div className={styles.skeletonText}></div>
        </li>
      ))}
    </ul>
  );
}
