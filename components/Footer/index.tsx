import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Är du redo att ta ditt event till nästa nivå? Tvivla då inte på att
        kontakta oss och boka tuktuken direkt!
      </p>
      <div className={styles.footerLinks}>
        <a href="https://www.instagram.com/luxuryevents.se/">Instagram</a>
        <a href="mailto:luxury.events@icloud.com">Email</a>
        <a href="tel:+46768904868">Telefon</a>
      </div>
    </footer>
  )
}
