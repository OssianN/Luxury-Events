import { useIntersection } from '@/hooks/useIntersection'
import styles from './contactForm.module.css'
import { useRef } from 'react'
import { useFormStatus } from 'react-dom'

export const SubmitButton = () => {
  const ref = useRef(null)
  const isVisible = useIntersection(ref, { threshold: 1 })
  const { pending } = useFormStatus()

  return (
    <button
      className={`${styles.submitButton} ${isVisible ? styles.animateUp : ''}`}
      type="submit"
      disabled={pending}
      ref={ref}
    >
      {pending ? 'Sending...' : 'Send'}
    </button>
  )
}
