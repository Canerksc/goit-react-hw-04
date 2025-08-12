import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  const { urls, alt_description, user, likes, description } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={alt_description || "Image preview"}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <button className={styles.modalClose} onClick={onClose} aria-label="Close modal">
        ×
      </button>

      <div className={styles.modalBody}>
        <img
          src={urls.regular || urls.full}
          alt={alt_description || "Image preview"}
          className={styles.modalImage}
        />
        <div className={styles.modalInfo}>
  <p><strong>Yazar:</strong> {user?.name || "Bilinmeyen"}</p>
  <p><strong>Beğeniler:</strong> {likes ?? 0}</p>
  {description && <p><strong>Açıklama:</strong> {description}</p>}
</div>

      </div>
    </Modal>
  );
}
