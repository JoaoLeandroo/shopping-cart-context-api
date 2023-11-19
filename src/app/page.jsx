import UserProvider from './contexts/user'
import Card from './components/Card/page'

export default function Home() {
  return (
    <UserProvider>
      <main className='mt-2 w-full flex items-center justify-center'>
        <Card/>
      </main>
    </UserProvider>
  )
}
