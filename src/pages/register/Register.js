import './Register.less'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/imgs/logo.JPG'
import { Button, Form, Input, Space } from 'antd'
import verifyCode from '@/assets/verifyCode/verify.png'
import verifyCode2 from '@/assets/verifyCode/verify2.png'
import verifyCode3 from '@/assets/verifyCode/verify3.png'
import verifyCode4 from '@/assets/verifyCode/verify4.png'
import verifyCode5 from '@/assets/verifyCode/verify5.png'
import verifyCode6 from '@/assets/verifyCode/verify6.png'
import verifyCode7 from '@/assets/verifyCode/verify7.png'
import verifyCode8 from '@/assets/verifyCode/verify8.png'
import verifyCode9 from '@/assets/verifyCode/verify9.png'
import verifyCode10 from '@/assets/verifyCode/verify10.png'
import { apiGet } from '@/service/reqMethod.js'

const verifyList = [
  verifyCode,
  verifyCode2,
  verifyCode3,
  verifyCode4,
  verifyCode5,
  verifyCode6,
  verifyCode7,
  verifyCode8,
  verifyCode9,
  verifyCode10,
]
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 24 },
}

const tailLayout = {
  wrapperCol: { offset: 2, span: 20 },
}

const Register = () => {
  const [form] = Form.useForm()
  const [picIndex, setPicIndex] = useState(0)

  const onFinish = (values) => {
    // 调用注册接口，弹框提示注册成功
  }
  const changePic = () => {
    setPicIndex(Math.ceil(Math.random() * 9))
  }
  const sendPhoneCode = async () => {
    try {
      await form.validateFields(['phoneNo'])
      // 调用接口，发送短信验证码
      // axios.xxx()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="register-container">
      <Link className="logo-container" to="/">
        <img className="logo-img" src={logo} alt="" />
      </Link>
      <Form
        {...layout}
        form={form}
        size="large"
        name="control-ref"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          {...tailLayout}
          name="phoneNo"
          rules={[
            {
              validator: (rule, value) => {
                if (!value) return Promise.reject(new Error('请输入手机号'))
                const reg = /^1[3456789]\d{9}$/
                if (!reg.test(value)) return Promise.reject(new Error('输入的手机号格式不正确'))
                return Promise.resolve()
              },
            },
          ]}
        >
          <Input placeholder="手机号" />
        </Form.Item>

        <Form.Item {...tailLayout} style={{ marginBottom: 0 }}>
          <Form.Item
            name="verifyCode"
            style={{ display: 'inline-block', width: 'calc(73%)' }}
            rules={[
              {
                validator: (rule, value) => {
                  if (!value) return Promise.reject(new Error('请输入验证码'))
                  const reg = /^\d{4}$/
                  if (!reg.test(value)) return Promise.reject(new Error('请输入4位数字验证码'))
                  return Promise.resolve()
                },
              },
            ]}
          >
            <Input placeholder="验证码" />
          </Form.Item>
          <img
            src={verifyList[picIndex]}
            alt=""
            style={{ height: '40px', cursor: 'pointer' }}
            onClick={changePic}
          />
        </Form.Item>

        <Form.Item
          {...tailLayout}
          name="phoneCode"
          rules={[
            {
              validator: (rule, value) => {
                if (!value) return Promise.reject(new Error('请输入短信码'))
                const reg = /^\d{6}$/
                if (!reg.test(value)) return Promise.reject(new Error('请输入6位数字短信码'))
                return Promise.resolve()
              },
            },
          ]}
        >
          <Space.Compact size="large">
            <Input placeholder="短信码" />
            <Button type="primary" style={{ backgroundColor: '#14a900' }} onClick={sendPhoneCode}>
              发送短信码
            </Button>
          </Space.Compact>
        </Form.Item>

        <Form.Item
          {...tailLayout}
          name="pwd"
          rules={[
            {
              validator: (rule, value) => {
                if (!value) return Promise.reject(new Error('请输入登录密码'))
                const reg = /^(?![a-zA-Z]+$)(?!\d+$)(?![^\da-zA-Z\s]+$).{6,18}$/
                if (!reg.test(value))
                  return Promise.reject(
                    new Error('请输入由字母、数字、特殊字符，任意2种组成，6-18位')
                  )
                return Promise.resolve()
              },
            },
          ]}
        >
          <Input.Password placeholder="登录密码" />
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
