import Image from 'next/image'
import styles from './contactForm.module.css'

export const ContactForm = () => {
  return (
    <div className={styles.contactFormContainer} id="kontakta oss">
      <h2 className={styles.formHeading}>Kontakta oss</h2>

      <form className={styles.contacForm}>
        <input
          className={`${styles.formInput} ${styles.nameInput}`}
          type="text"
          autoComplete="name"
          name="name"
          placeholder="Namn"
          required
        />
        <input
          className={`${styles.formInput} ${styles.phoneInput}`}
          type="text"
          autoComplete="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className={`${styles.formInput} ${styles.emailInput}`}
          type="number"
          autoComplete="phone"
          name="phone"
          placeholder="Telefon"
        />
        <textarea
          className={`${styles.formInput} ${styles.messageInput}`}
          placeholder="Meddelande..."
          required
        />
      </form>
    </div>
  )
}
