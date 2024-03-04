'use client'
import {
  type ChangeEvent,
  type ChangeEventHandler,
  type FormEvent,
  useState,
  useEffect,
} from 'react'
import styles from './contactForm.module.css'

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export const ContactForm = () => {
  const [formInput, setFormInput] = useState<FormState>(initialFormState)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormInput(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const res = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formInput),
    })

    const data = await res.json()
    setIsLoading(false)

    if (!res.ok) {
      setError(data.error)
      return
    }

    setIsEmailSent(true)
    setFormInput(initialFormState)
  }

  useEffect(() => {
    setError('')
  }, [formInput])

  return (
    <div className={styles.contactFormContainer} id="kontakta oss">
      <h2 className={styles.formHeading}>Kontakta oss</h2>

      <form className={styles.contacForm} onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        {isEmailSent && <p>Tack för ditt intresse, vi återkommer snart!</p>}
        <input
          className={`${styles.formInput} ${styles.nameInput}`}
          onChange={handleChange}
          value={formInput.name}
          type="text"
          autoComplete="name"
          name="name"
          placeholder="Namn"
          required
        />
        <input
          className={`${styles.formInput} ${styles.phoneInput}`}
          onChange={handleChange}
          value={formInput.email}
          type="text"
          autoComplete="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className={`${styles.formInput} ${styles.emailInput}`}
          onChange={handleChange}
          value={formInput.phone}
          type="number"
          autoComplete="phone"
          name="phone"
          placeholder="Telefon"
        />
        <textarea
          className={`${styles.formInput} ${styles.messageInput}`}
          onChange={handleChange}
          value={formInput.message}
          placeholder="Meddelande..."
          name="message"
          required
        />
        <button
          className={styles.submitButton}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  )
}
