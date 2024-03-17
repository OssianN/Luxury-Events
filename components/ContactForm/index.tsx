'use client'
import styles from './contactForm.module.css'
import { FormInput } from './FormInput'
import { submitForm } from '@/actions/submitForm'
import { SubmitButton } from './SubmitButton'
import { useFormState } from 'react-dom'
import { initialFormState } from '@/constants/formState'
import { useEffect, useRef } from 'react'

export const ContactForm = () => {
  const [formState, formAction] = useFormState(submitForm, initialFormState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (formState.isEmailSent) {
      formRef?.current?.reset()
    }
  }, [formState.isEmailSent])

  return (
    <div className={styles.contactFormContainer} id="kontakta oss">
      <h2 className={styles.formHeading}>Kontakta oss</h2>

      <form className={styles.contacForm} action={formAction} ref={formRef}>
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
