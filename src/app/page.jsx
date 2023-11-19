import UserProvider from './contexts/user'
import Card from './components/Card/page'
import Header from './components/Header/page'

export default function Home() {
  return (
    <UserProvider>
      <Header/>
      <main className='mt-2 w-full flex items-center justify-center flex-wrap gap-5'>
        <Card 
          alt="Bola de Futebol" 
          img="/images/bola.png" 
          description="Bola de Futebol modelo xxht"
          price={89}
          price_cents={80}
          />

        <Card 
          alt="Mochila New United" 
          img="/images/mochila.png" 
          description="Mochilha Now United - Modelo único"
          price={110}
          price_cents={20}
          />

        <Card 
          alt="Book Abel Ferreira - Palmeiras" 
          img="/images/book.webp" 
          description="Livro Abel Ferreia - Cabeça fria Coração quente"
          price={45}
          price_cents={90}
          />

        <Card 
          alt="Notebook" 
          img="/images/notebook.webp" 
          description="Notebook Lenove Ideapad"
          price={2380}
          price_cents={99}
          />

      </main>
    </UserProvider>
  )
}
