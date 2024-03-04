import { Button } from 'react-scroll'
import styles from './navigation.module.css'

type NavigationButtonProps = {
  to: string
}

export const NavigationButton = ({ to }: NavigationButtonProps) => {
  return (
    <Button
      spy={true}
      smooth={true}
      offset={-250}
      duration={500}
      to={to}
      activeClass={styles.activeButton}
      className={styles.button}
    >
      <div className={styles.indicator} />
      <p className={styles.buttonText}>{to}</p>
    </Button>
  )
}
