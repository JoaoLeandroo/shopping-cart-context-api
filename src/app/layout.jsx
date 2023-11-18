import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: [
  '300',
  '500',
  '900'
] })

export const metadata = {
  title: 'Coxtext Store - Home page',
  description: 'Página web criada, para estudar melhor como se aplicar o Context Api na pratica',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  )
}
