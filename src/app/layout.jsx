import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/Header/page'

const roboto = Roboto({ subsets: ['latin'], weight: [
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
      <body className={`${roboto.className} bg-background-center`}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
