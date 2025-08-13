import styles from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ onClick }) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <button className={styles.loadMoreBtn} onClick={onClick} >Daha Fazla Yükle</button>
    </div>
  );
}
