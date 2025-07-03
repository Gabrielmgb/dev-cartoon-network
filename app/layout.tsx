import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dev Cartoon Network',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon-CN.png', 
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
