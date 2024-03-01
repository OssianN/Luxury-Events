import { CSSProperties } from 'react'
import styles from './contactButton.module.css'

type ContactButtonProps = {
  dark?: boolean
}

export const ContactButton = ({ dark }: ContactButtonProps) => {
  const style = dark
    ? ({
        '--contact-button-color': 'white',
        '--contact-button-bg': 'black',
      } as CSSProperties)
    : {}

  return (
    <button className={styles.contactButton} style={style}>
      Kontakt
    </button>
  )
}
