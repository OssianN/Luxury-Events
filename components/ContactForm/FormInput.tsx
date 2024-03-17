import { useRef, type ChangeEvent, useState, useEffect } from 'react'
import styles from './contactForm.module.css'
import { useIntersection } from '@/hooks/useIntersection'

type FormInputProps = {
  name: string
  placeholder: string
  type?: string
  className?: string
  required?: boolean
}

export const FormInput = ({
  name,
  placeholder,
  className,
  type = 'text',
  required = true,
}: FormInputProps) => {
  const ref = useRef(null)
  const isVisible = useIntersection(ref, { threshold: 1 })

  const props = {
    className: `${styles.formInput} ${className && styles[className]} ${
      isVisible ? styles.animateUp : ''
    }`,
    autoComplete: name,
    name: name,
    placeholder: placeholder,
    required,
    ref,
  }

  return name !== 'message' ? (
    <input {...props} type={type} />
  ) : (
    <textarea {...props} />
  )
}
