import './ForgetPwd.less'
import logo from '@/assets/imgs/logo.JPG'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import PhoneNumber from '@/pages/components/verifyInput/phoneNumber/PhoneNumber'
import PictureCode from '@/pages/components/verifyInput/pictureCode/PictureCode'

const layout = {
  wrapperCol: { span: 24 },
}

const tailLayout = {
  wrapperCol: { offset: 1, span: 22 },
}

const ForgetPwd = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className="forget-pwd-container">
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
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="next-btn">
            下一步
          </Button>
          <h2>没有收到邮件？</h2>
          <p>
            如果2-3分钟内您未收到邮件，建议您检查“垃圾箱”或 重新找回 。如遇问题可咨询QQ:1272822694
          </p>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ForgetPwd
