import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
})

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, phone, message } = await req.json()

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `${name} är intresserad av att boka din Tuktuk`,
      text: `${message}

${phone ? `Telefonnummer: ${phone}` : ''}`,
    }

    transporter.sendMail(mailOptions)

    return NextResponse.json({})
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { error: 'Något gick fel, försök igen.' },
      { status: 500 }
    )
  }
}
