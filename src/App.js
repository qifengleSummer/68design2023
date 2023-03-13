import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Login from './pages/login/Login'

function App() {
  return (
    <div className="App">
      <header >
        <Link to="/login1">跳转登录1</Link>
      </header>
      <Routes>
        <Route path="/" element={<Init1 />}></Route>
        <Route path="login1" element={<Login />}></Route>
        <Route path="login2" element={<Login2 />}></Route>
      </Routes>
    </div>
  );
}

function Init1() {
  return (
    <div>初始化组件</div>
  )
}

function Login2() {
  return (
    <div>2222222222222登录</div>
  )
}



export default App;
