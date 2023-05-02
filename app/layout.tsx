import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wheel and Tire Blog',
  description: 'A discussion for wheels and tires',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = 
    (<header>
      <div>
        <h1>Wheel and Tire Blog</h1>
        <p>Welcome to you're dedicated wheel and tire discussions</p>
      </div>
    </header>)

  const footer = (
    <footer>
      <div>
        <br></br>
        <h3>Developed by Calculated Customs</h3>
      </div>
    </footer>
  )
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {header}
        {children}</body>
        {footer}
    </html>
  )
}
