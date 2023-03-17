import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/hompPage/HomePage'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ForgetPwd from './pages/forgetPwd/ForgetPwd'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="forget-pwd" element={<ForgetPwd />}></Route>
      </Routes>
    </div>
  )
}

export default App
