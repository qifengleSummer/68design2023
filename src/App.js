import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ForgetPwd from './pages/forgetPwd/ForgetPwd'

function App() {
  return (
    <div className="App">
      <header >
        <Link to="/login">跳转登录页面</Link>
      </header>
      <Routes>
        <Route path="/" element={<Init1 />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="forget-pwd" element={<ForgetPwd />}></Route>
      </Routes>
    </div>
  );
}

function Init1() {
  return (
    <div>初始化组件</div>
  )
}



export default App;
