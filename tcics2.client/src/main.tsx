import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return isLoggedIn ? (
    <Dashboard />
  ) : (
    <LoginPage onLogin={() => setIsLoggedIn(true)} />
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)