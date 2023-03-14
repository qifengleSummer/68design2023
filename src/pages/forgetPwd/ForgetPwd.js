import './ForgetPwd.less'
import logo from "../../assets/imgs/logo.svg";
import { useRef } from "react";
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 5, span: 16 },
};
  
const ForgetPwd = () => {
    const formRef = useRef({})


    const onFinish = (values) => {
        console.log(values)
    }

    return (
        <div className='forget-pwd-container'>
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
                <Form.Item name="phoneNo" label="用户名" rules={[{ required: true, message: '请输入Email/手机号' }]}>
                    <Input placeholder='Email/手机号'/>
                </Form.Item>
                <Form.Item name="code" label="验证码" rules={[{ required: true, message: '请输入验证码' }]}>
                    <Input />
                </Form.Item>  
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" className='next-btn'>
                        下一步
                    </Button>
                    <h2>没有收到邮件？</h2>
                    <p>如果2-3分钟内您未收到邮件，建议您检查“垃圾箱”或 重新找回 。如遇问题可咨询QQ:1272822694</p>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ForgetPwd