import './Login.less'
import logo from '@/assets/imgs/logo.svg'
import { Tabs, Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 5, span: 16 },
}

const tabList = [
  {
    label: '密码登录',
    key: 'pwd',
    children: '',
  },
  {
    label: '短信登录',
    key: 'msg',
    children: '',
  },
]

const Login = () => {
  const [tabKey, setTabKey] = useState('pwd')
  const formRef = useRef(null)

  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log(values)
    navigate('/', { state: 111 })
  }
  const onChange = (key) => {
    setTabKey(key)
  }

  return (
    <div className="login-container">
      <Link className="logo-container" to="/">
        <img className="logo-img" src={logo} alt="" />
      </Link>
      <Tabs
        onChange={onChange}
        type="card"
        items={tabList.map((item) => {
          return {
            label: item.label,
            key: item.key,
            children: '',
          }
        })}
      />
      <Form
        {...layout}
        ref={formRef}
        name="control-ref"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        {tabKey === 'pwd' ? <PwdForm /> : <MsgForm />}
        <Form.Item {...tailLayout}>
          <p>
            登录即同意
            <Link className="link-style" to="https://www.baidu.com">
              注册协议
            </Link>
            、
            <Link className="link-style" to="https://www.baidu.com">
              交易服务协议
            </Link>
          </p>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="login-btn">
            登录
          </Button>
          <p>
            <Link className="link-style" to="/register">
              立即注册
            </Link>
            <Link className="link-style" to="/forget-pwd">
              忘记密码
            </Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  )
}

const PwdForm = () => {
  return (
    <div>
      <Form.Item
        name="phoneNo"
        label="用户名"
        rules={[{ required: true, message: '请输入用户名/Email/手机号' }]}
      >
        <Input placeholder="用户名/Email/手机号" />
      </Form.Item>
      <Form.Item
        name="pwd"
        label="登录密码"
        rules={[{ required: true, message: '请输入登录密码' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="code" label="验证码" rules={[{ required: true, message: '请输入验证码' }]}>
        <Input />
      </Form.Item>
    </div>
  )
}

const MsgForm = () => {
  return (
    <div>
      <Form.Item
        name="phoneNo"
        label="手机号"
        rules={[{ required: true, message: '请输入手机号' }]}
      >
        <Input placeholder="手机号" />
      </Form.Item>
      <Form.Item name="code" label="验证码" rules={[{ required: true, message: '请输入验证码' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="phoneCode"
        label="短信码"
        rules={[{ required: true, message: '请输入短信码' }]}
      >
        <Input />
      </Form.Item>
    </div>
  )
}

export default Login
