import UserProvider from './contexts/user'

export default function Home() {
  return (
    <UserProvider>
      <main>
        Página principal
      </main>
    </UserProvider>
  )
}
