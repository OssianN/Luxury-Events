import { GalleryImage } from './GalleryImage'
import styles from './gallery.module.css'

export const Gallery = () => {
  return (
    <div className={styles.gallery} id="gallery">
      <GalleryImage src="/IMG_4047.jpeg" />
      <GalleryImage src="/IMG_4782.jpg" />
      <GalleryImage src="/IMG_5051.JPEG" />
      <GalleryImage src="/IMG_6685.jpeg" />
      <GalleryImage src="/picture-2600.jpeg" />
      <GalleryImage src="/picture-2601.jpeg" />
    </div>
  )
}
