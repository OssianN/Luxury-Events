'use client'
import {
  type ChangeEvent,
  type FormEvent,
  useState,
  useEffect,
  useRef,
} from 'react'
import styles from './contactForm.module.css'
import { FormInput } from './FormInput'

export type FormState = {
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
        {isEmailSent && (
          <p className={styles.emailSentText}>Tack, vi återkommer snart!</p>
        )}

        <FormInput
          handleChange={handleChange}
          value={formInput.name}
          name="name"
          placeholder="Namn"
          className="nameInput"
        />

        <FormInput
          handleChange={handleChange}
          value={formInput.email}
          name="email"
          placeholder="Email"
          className="emailInput"
        />

        <FormInput
          handleChange={handleChange}
          value={formInput.phone}
          name="phone"
          placeholder="Telefon"
          className="phoneInput"
          type="number"
          required={false}
        />

        <FormInput
          handleChange={handleChange}
          value={formInput.message}
          name="message"
          placeholder="Meddelande..."
          className="messageInput"
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
