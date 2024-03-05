import styles from './footer.module.css'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Är du redo att ta ditt event till nästa nivå? Tvivla då inte på att
        kontakta oss och boka tuktuken direkt!
      </p>
      <div className={styles.footerLinks}>
        <a href="https://www.instagram.com/luxuryevents.se/">
          <Image src="/insta.png" alt="instagram" width={20} height={20} />
        </a>
        <a href="mailto:luxury.events@icloud.com">
          {' '}
          <Image src="/email.png" alt="email" width={20} height={20} />
        </a>
        <a href="tel:+46768904868">
          <Image src="/phone.png" alt="phone" width={18} height={20} />
        </a>
      </div>
    </footer>
  )
}
