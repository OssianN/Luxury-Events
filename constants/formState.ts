import type { FormState } from '@/types'

export const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  isEmailSent: false,
  error: false,
}
