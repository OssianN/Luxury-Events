import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Image
          className={styles.heroImage}
          src={'/heroImage.png'}
          alt="fira"
          height={350}
          width={400}
        />
        <h1 className={styles.heroHeading}>
          Skapa ditt Drömevent
          <span className={styles.heroHeadingSpan}>Hyr vår Tuktuk</span>
        </h1>
        <button className={styles.contactButton}>Kontakt</button>
      </div>

      <section className={styles.contentContainer}>
        <div className={styles.introText}>
          <p>
            Fyller du år? Gifter du dig? Nyligen förlovad eller planerar du en
            möhippa?
          </p>
          <p>
            Kanske är det du som är ansvarig över PR och marknadsföring? Eller
            behöver du en serveringsvagn för försäljning? Oavsett så passar vår
            tuktuk perfekt till just ditt evenemang!{' '}
          </p>
        </div>

        <div className={styles.gallery}>
          <Image
            className={styles.galleryImage}
            src="/IMG_4047.jpeg"
            width={250}
            height={250}
            alt="lyxevent 1"
          />

          <Image
            className={styles.galleryImage}
            src="/IMG_4782.jpg"
            width={250}
            height={250}
            alt="lyxevent 2"
          />

          <Image
            className={styles.galleryImage}
            src="/IMG_5051.JPEG"
            width={250}
            height={250}
            alt="lyxevent 3"
          />

          <Image
            className={styles.galleryImage}
            src="/IMG_6685.jpeg"
            width={250}
            height={250}
            alt="lyxevent 4"
          />

          <Image
            className={styles.galleryImage}
            src="/picture-2600.jpeg"
            width={250}
            height={250}
            alt="lyxevent 5"
          />

          <Image
            className={styles.galleryImage}
            src="/picture-2601.jpeg"
            width={250}
            height={250}
            alt="lyxevent 6"
          />
        </div>

        {/* <Image
          className={styles.introLogo}
          src="/logo.png"
          width={300}
          height={300}
          alt="lyxevent"
        /> */}
        <div className={styles.introText}>
          <p>
            Är du redo att ta ditt event till nästa nivå? Tvivla då inte på att
            kontakta oss och boka tuktuken direkt!
          </p>

          <button className={styles.contactButton2}>Kontakt</button>
        </div>
      </section>
    </main>
  )
}
