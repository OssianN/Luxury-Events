import Image from 'next/image'
import styles from './gallery.module.css'

type GalleryImageProps = {
  src: string
}

export const GalleryImage = ({ src }: GalleryImageProps) => {
  return (
    <Image
      className={styles.galleryImage}
      src={src}
      width={300}
      height={300}
      alt="lyxevent"
    />
  )
}
