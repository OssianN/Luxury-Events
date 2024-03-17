'use server'
import { FormState, initialFormState } from '@/components/ContactForm'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'hotmail',
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
      from: email,
      to: process.env.EMAIL_RECIEVER_ADDRESS,
      subject: `${name} angående Tuktuk`,
      text: `${message}

    ${phone ? `Telefonnummer: ${phone}` : ''}`,
    }

    await transporter.sendMail(mailOptions)
    return { ...initialFormState, isEmailSent: true }
  } catch (e) {
    console.error(e)
    return { ...initialFormState, error: true }
  }
}
