import styles from './aboutUs.module.css'

export const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer} id="om oss">
      <div>
        <h3 className={styles.aboutUsSubtitle}>Vad är vår idé?</h3>
        <p>
          Vad är vår idé? Vår idé med vårt företag är att erbjuda en tuktuk
          omrenoverad till serveringsvagn, perfekt för cocktailservering, PR,
          försälning, mässor, etc.
        </p>
      </div>
      <div>
        <h3 className={styles.aboutUsSubtitle}>Vad är vår vision?</h3>
        <p>
          Visionen är att skapa en &quot;wow-faktor&quot; till evenemang. Vår
          tuktuk bidrar med det lilla extra för att förstärka upplevelsen hos
          gästerna, vilket vi märkt uppskattats och gjort stor skillnad för
          evenemangets helhet.
        </p>
      </div>
    </div>
  )
}
