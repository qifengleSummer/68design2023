import './Login.less'
import logo from '@/assets/imgs/logo.JPG'
import { Tabs, Button, Form } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import PictureCode from '@/pages/components/verifyInput/pictureCode/PictureCode'
import PhoneCode from '@/pages/components/verifyInput/phoneCode/PhoneCode'
import PhoneNumber from '@/pages/components/verifyInput/phoneNumber/PhoneNumber'
import PasswordInput from '@/pages/components/verifyInput/passwordInput/PasswordInput'
import { useSelector } from 'react-redux'
import { adapterLoginEntities } from '@/store/loginSlice/index.js'

const layout = {
  wrapperCol: { span: 24 },
}

const tailLayout = {
  wrapperCol: { offset: 1, span: 24 },
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
  const [form] = Form.useForm()

  const navigate = useNavigate()
  let loginData = useSelector(adapterLoginEntities)

  const onFinish = (values) => {
    let row = loginData[values.phoneNo]
    if (!row) return alert('该账号未注册')
    if (row.changes.name === values.phoneNo && row.changes.pwd === values.pwd) {
      navigate('/', { state: 111 })
    } else {
      alert('账号或密码错误')
    }
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
        form={form}
        size="large"
        name="control-ref"
        onFinish={onFinish}
        autoComplete="off"
      >
        {tabKey === 'pwd' ? <PwdForm /> : <MsgForm form={form} />}
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
      <PhoneNumber tailLayout={tailLayout} />
      <PasswordInput tailLayout={tailLayout} />
      <PictureCode tailLayout={tailLayout} />
    </div>
  )
}

const MsgForm = ({ form }) => {
  return (
    <div>
      <PhoneNumber tailLayout={tailLayout} />
      <PictureCode tailLayout={tailLayout} />
      <PhoneCode tailLayout={tailLayout} formObj={form} />
    </div>
  )
}

export default Login
