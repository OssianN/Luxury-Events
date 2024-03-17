'use client'
import styles from './contactForm.module.css'
import { FormInput } from './FormInput'
import { submitForm } from '@/actions/submitForm'
import { SubmitButton } from './SubmitButton'
import { useFormState } from 'react-dom'

export type FormState = {
  name: string
  email: string
  phone: string
  message: string
  isEmailSent?: boolean
  error?: boolean
}

export const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  isEmailSent: false,
  error: false,
}

export const ContactForm = () => {
  const [formState, formAction] = useFormState(submitForm, initialFormState)

  return (
    <div className={styles.contactFormContainer} id="kontakta oss">
      <h2 className={styles.formHeading}>Kontakta oss</h2>

      <form className={styles.contacForm} action={formAction}>
        <FormInput name="name" placeholder="Namn" className="nameInput" />
        <FormInput name="email" placeholder="Email" className="emailInput" />
        <FormInput
          name="phone"
          placeholder="Telefon"
          className="phoneInput"
          type="number"
          required={false}
        />
        <FormInput
          name="message"
          placeholder="Meddelande..."
          className="messageInput"
        />

        {formState?.isEmailSent && (
          <p className={styles.emailSentText}>Tack, vi återkommer snart!</p>
        )}
        {formState?.error && <p>Något gick fel, försök igen.</p>}

        <SubmitButton />
      </form>
    </div>
  )
}
