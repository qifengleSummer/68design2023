import './Register.less'
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.svg";
import { Button, Form, Input } from 'antd';


const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 5, span: 16 },
};

const Register = () => {
  const formRef = useRef(null);

  const onFinish = (values) => {
    console.log(values);
  };

  // const onReset = () => {
  //   formRef.current?.resetFields();
  // };

  // const onFill = () => {
  //   formRef.current?.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  // };
  return (
    <div className='register-container'>
        <Link className='logo-container' to="/">
          <img className='logo-img' src={logo} alt="" />
        </Link>
        <Form
            {...layout}
            ref={formRef}
            name="control-ref"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            >
            <Form.Item name="phoneNo" label="手机号" rules={[{ required: true, message: '请输入手机号' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="code" label="验证码" rules={[{ required: true, message: '请输入验证码' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="phoneCode" label="短信码" rules={[{ required: true, message: '请输入短信码' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="pwd" label="登录密码" rules={[{ required: true, message: '请输入登录密码' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout} >
                <p>
                  注册即同意  <Link className='link-style' to="https://www.baidu.com">注册协议</Link>、<Link className='link-style' to="https://www.baidu.com">交易服务协议</Link>
                </p>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" className='register-btn'>
                  注册
                </Button>
                <p>
                  已有帐号？  <Link className='link-style' to="/login">立即登录</Link>
                </p>
            </Form.Item>
        </Form>
    </div>
  );
};

export default Register