import type { Metadata } from 'next'
import { Cormorant_Garamond, Raleway } from 'next/font/google'
import './globals.css'

const carmorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
})

export const metadata: Metadata = {
  title: 'Lyxevent – hyr en tuktuk',
  description: 'Hyr en tuktuk för en lyxigare fest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${carmorant.className}`}>
        {children}
      </body>
    </html>
  )
}
