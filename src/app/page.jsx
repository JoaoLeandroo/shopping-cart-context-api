import UserProvider from './contexts/user'
import Card from './components/Card/page'

export default function Home() {
  return (
    <UserProvider>
      <main className='mt-2 w-full flex items-center justify-center'>
        <Card alt="Bola de Futebol" img="/images/bola.png"/>
      </main>
    </UserProvider>
  )
}
