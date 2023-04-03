import './Register.less'
import { Link, useNavigate } from 'react-router-dom'
import logo from '@/assets/imgs/logo.JPG'
import { Button, Form, Modal } from 'antd'
import PictureCode from '@/pages/components/verifyInput/pictureCode/PictureCode'
import PhoneCode from '@/pages/components/verifyInput/phoneCode/PhoneCode'
import PhoneNumber from '@/pages/components/verifyInput/phoneNumber/PhoneNumber'
import PasswordInput from '@/pages/components/verifyInput/passwordInput/PasswordInput'
import { apiGet } from '@/service/reqMethod.js'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 24 },
}

const tailLayout = {
  wrapperCol: { offset: 2, span: 20 },
}

const Register = () => {
  const native = useNavigate()
  const [form] = Form.useForm()
  const [modal, contextHolderM] = Modal.useModal()

  const countDown = (values) => {
    let secondsToGo = 5
    const instance = modal.success({
      title: '您已成功注册',
      content: `${secondsToGo} 秒之后跳转登录页.`,
      okText: '确定',
      onOk: () => {
        localStorage.setItem('68UseInfo', JSON.stringify(values))
        native('/login')
      },
    })
    const timer = setInterval(() => {
      secondsToGo -= 1
      instance.update({
        content: `${secondsToGo} 秒之后跳转登录页.`,
        okText: '确定',
        onOk: () => {
          localStorage.setItem('68UseInfo', JSON.stringify(values))
          native('/login')
        },
      })
    }, 1000)
    setTimeout(() => {
      clearInterval(timer)
      instance.destroy()
      localStorage.setItem('68UseInfo', JSON.stringify(values))
      native('/login')
    }, secondsToGo * 1000)
  }

  const onFinish = async (values) => {
    // 调用注册接口，弹框提示注册成功
    try {
      const res = await apiGet({ url: '/apiRegister', params: { ...values } })
      if (res.data.data.status) countDown(values)
    } catch (error) {
      console.log(error)
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
        <PhoneNumber tailLayout={tailLayout} />

        <PictureCode tailLayout={tailLayout} />

        <PhoneCode tailLayout={tailLayout} formObj={form} />

        <PasswordInput tailLayout={tailLayout} />

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
      {contextHolderM}
    </div>
  )
}

export default Register
