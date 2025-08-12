import ImageCard from "./ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  if (!images.length) return null;

  return (
    <ul className={styles.imageGallery}>
      {images.map((img) => (
        <li key={img.id} className={styles.imageGalleryItem}>
          <ImageCard image={img} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
