import { ContactButton } from '@/components/ContactButton'
import styles from './page.module.css'
import { Gallery } from '@/components/Gallery'
import { Hero } from '@/components/Hero'
import { NavigationBar } from '@/components/Navigation'
import { IntroductionText } from '@/components/Introduction'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar />
      <Hero />

      <section className={styles.contentContainer}>
        <IntroductionText />
        <Gallery />

        <footer className={styles.footer}>
          <p>
            Är du redo att ta ditt event till nästa nivå? Tvivla då inte på att
            kontakta oss och boka tuktuken direkt!
          </p>

          <ContactButton dark />
        </footer>
      </section>
    </main>
  )
}
