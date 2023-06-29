import './App.css'
import { useLayoutEffect } from 'react'
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom'
import TopHeader from '@/pages/components/header/Header'
import Footer from '@/pages/components/footer/Footer'
import BottomTool from '@/pages/components/bottomTool/BottomTool'
import LoginModal from '@/pages/components/loginModal/LoginModal.js'
import { useDispatch } from 'react-redux'
import { SHOW_LOGIN_MODAL } from '@/store/loginStatusSlice/index.js'

function App() {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    return () => {
      // 当切换页面时需要隐藏登录弹框
      dispatch({ type: SHOW_LOGIN_MODAL, payload: false })
    }
  }, [pathname])
  return (
    <div className="app">
      <TopHeader />
      <div className="app-out-let">
        <Outlet />
      </div>
      <Footer />
      <BottomTool />
      <LoginModal />
      <ScrollRestoration />
    </div>
  )
}

export default App
