'use server'
import { initialFormState } from '@/constants/formState'
import type { FormState } from '@/types'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'iCloud',
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
})

export const submitForm = async (_: FormState, formData: FormData) => {
  try {
    const { name, email, phone, message } = Object.fromEntries(
      formData
    ) as unknown as FormState

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.EMAIL_RECIEVER_ADDRESS,
      subject: `${name} angående Tuktuk`,
      text: `
Kontakt:
${phone}
${email}

Meddelande:
${message}`,
    }

    // await transporter.sendMail(mailOptions)

    return { ...initialFormState, isEmailSent: true }
  } catch (e) {
    console.error(e)
    return { ...initialFormState, error: true }
  }
}
