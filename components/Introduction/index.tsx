'use client'
import styles from './introduction.module.css'

export const IntroductionText = () => {
  return (
    <div className={styles.introText} id="introduktion">
      <p>
        Fyller du år? Gifter du dig? Nyligen förlovad eller planerar du en
        möhippa? Kanske är det du som är ansvarig över PR och marknadsföring?
        Eller behöver du en serveringsvagn för försäljning? Oavsett så passar
        vår tuktuk perfekt till just ditt evenemang!{' '}
      </p>
    </div>
  )
}
