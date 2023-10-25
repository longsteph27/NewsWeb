import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Trispace } from 'next/font/google'

const tripspace = Trispace({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'News-F',
  description: 'News football for you here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={tripspace.className}>
        <Navbar/>
        <div>{children}</div>
      </body>
    </html>
  )
}
