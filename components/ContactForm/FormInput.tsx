import { useRef, type ChangeEvent, useState, useEffect } from 'react'
import styles from './contactForm.module.css'
import { useIntersection } from '@/hooks/useIntersection'

type FormInputProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  value: string
  name: string
  placeholder: string
  type?: string
  className?: string
  required?: boolean
}

export const FormInput = ({
  name,
  placeholder,
  handleChange,
  value,
  className,
  type = 'text',
  required = true,
}: FormInputProps) => {
  const ref = useRef(null)
  const intersection = useIntersection(ref, { threshold: 1 })
  const [isVisible, setIsVisible] = useState<boolean>()

  useEffect(() => {
    if (!isVisible) {
      setIsVisible(intersection?.isIntersecting)
    }
  }, [isVisible, intersection?.isIntersecting])

  const props = {
    className: `${styles.formInput} ${className && styles[className]} ${
      isVisible ? styles.animateUp : ''
    }`,
    onChange: handleChange,
    value,
    autoComplete: name,
    name: name,
    placeholder: placeholder,
    required,
    ref,
  }

  return (
    <>
      {name !== 'message' ? (
        <input {...props} type={type} />
      ) : (
        <textarea {...props} />
      )}
    </>
  )
}
