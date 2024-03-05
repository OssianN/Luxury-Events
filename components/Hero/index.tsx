import Image from 'next/image'
import styles from './hero.module.css'
import { ContactButton } from '../ContactButton'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.heroImage}
        src={'/heroImage.png'}
        alt="fira"
        height={450}
        width={650}
      />
      <div className={styles.heroHeading}>
        <span className={styles.heroHeadingSpan1}>Skapa ditt Drömevent</span>
        <span className={styles.heroHeadingSpan2}>Hyr vår Tuktuk</span>
      </div>

      <div className={styles.buttonContainer}>
        <ContactButton />
      </div>
    </section>
  )
}
