import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'DSRT - Digital Smart Revise Technology',
  description: 'DSRT Landing Page and Dashboard',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
