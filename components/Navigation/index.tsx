'use client'
import styles from './navigation.module.css'
import { NavigationButton } from './NavigationButton'

export const NavigationBar = () => {
  return (
    <section className={styles.navigationContainer}>
      <NavigationButton to="introduktion" />
      <NavigationButton to="gallery" />
      <NavigationButton to="om oss" />
      <NavigationButton to="kontakt" />
    </section>
  )
}