'use client'
import { CSSProperties } from 'react'
import { Button } from 'react-scroll'
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
    <Button
      to="kontakta oss"
      spy={true}
      smooth={true}
      offset={-250}
      duration={500}
      className={styles.contactButton}
      style={style}
    >
      Kontakt
    </Button>
  )
}
