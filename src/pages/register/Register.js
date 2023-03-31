import './Register.less'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/imgs/logo.JPG'
import { Button, Form, Input } from 'antd'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 5, span: 16 },
}

const Register = () => {
  const formRef = useRef(null)

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className="register-container">
      <Link className="logo-container" to="/">
        <img className="logo-img" src={logo} alt="" />
      </Link>
      <Form
        {...layout}
        ref={formRef}
        name="control-ref"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Form.Item
          name="phoneNo"
          label="手机号"
          rules={[
            {
              validator: (_, value) => {
                if (!value) return Promise.reject(new Error('请输入手机号'))
                const reg = /^1[3456789]\d{9}$/
                if (!reg.test(value)) return Promise.reject(new Error('输入的手机号格式不正确'))
                Promise.resolve()
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="code"
          label="验证码"
          rules={[
            {
              validator: (_, value) => {
                if (!value) return Promise.reject(new Error('请输入验证码'))
                const reg = /^\d{6}$/
                if (!reg.test(value)) return Promise.reject(new Error('请输入6位数字验证码'))
                Promise.resolve()
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phoneCode"
          label="短信码"
          rules={[
            {
              validator: (_, value) => {
                if (!value) return Promise.reject(new Error('请输入短信码'))
                const reg = /^\d{6}$/
                if (!reg.test(value)) return Promise.reject(new Error('请输入6位数字短信码'))
                Promise.resolve()
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="pwd"
          label="登录密码"
          rules={[
            {
              validator: (_, value) => {
                if (!value) return Promise.reject(new Error('请输入登录密码'))
                const reg = /^(?![a-zA-Z]+$)(?!\d+$)(?![^\da-zA-Z\s]+$).{6,18}$/
                if (!reg.test(value))
                  return Promise.reject(
                    new Error('请输入由字母、数字、特殊字符，任意2种组成，6-18位')
                  )
                Promise.resolve()
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <p>
            注册即同意
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
          <Button type="primary" htmlType="submit" className="register-btn">
            注册
          </Button>
          <p>
            已有帐号？
            <Link className="link-style" to="/login">
              立即登录
            </Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register
