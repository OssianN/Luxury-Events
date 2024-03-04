import { ContactButton } from '@/components/ContactButton'
import styles from './page.module.css'
import { Gallery } from '@/components/Gallery'
import { Hero } from '@/components/Hero'
import { NavigationBar } from '@/components/Navigation'
import { IntroductionText } from '@/components/Introduction'
import { ContactForm } from '@/components/ContactForm'
import { AboutUs } from '@/components/AboutUs'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar />
      <Hero />

      <section className={styles.contentContainer}>
        <IntroductionText />
        <Gallery />
        <AboutUs />
        <ContactForm />
      </section>

      <Footer />
    </main>
  )
}
