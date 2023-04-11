import './App.css'
import { useLayoutEffect } from 'react'
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom'
import TopHeader from '@/pages/components/header/Header'
import Footer from '@/pages/components/footer/Footer'

function App() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="app">
      <TopHeader />
      <div className="app-out-let">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App
