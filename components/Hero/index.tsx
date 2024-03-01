import Image from 'next/image'
import styles from './hero.module.css'
import { ContactButton } from '../ContactButton'

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.heroImage}
        src={'/heroImage.png'}
        alt="fira"
        height={450}
        width={650}
      />
      <h1 className={styles.heroHeading}>
        Skapa ditt Drömevent
        <span className={styles.heroHeadingSpan}>Hyr vår Tuktuk</span>
      </h1>

      <div className={styles.buttonContainer}>
        <ContactButton />
      </div>
    </div>
  )
}
