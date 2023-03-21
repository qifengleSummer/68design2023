import './App.css'
import { Route, Routes } from 'react-router-dom'
import TopHeader from '@/pages/components/header/Header'
import Footer from '@/pages/components/footer/Footer'
import HomePage from './pages/hompPage/HomePage'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ForgetPwd from './pages/forgetPwd/ForgetPwd'

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="forget-pwd" element={<ForgetPwd />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
