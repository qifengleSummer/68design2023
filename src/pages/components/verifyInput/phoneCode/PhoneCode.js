import React from 'react'
import { Button, Form, Input, Space, message } from 'antd'

const PhoneCode = ({ tailLayout, formObj }) => {
  const [messageApi, contextHolder] = message.useMessage()

  const sendPhoneCode = async () => {
    try {
      await formObj.validateFields(['phoneNo'])
      // 调用接口，发送短信验证码
      messageApi.open({
        type: 'success',
        content: '短信验证码已发送，请查收',
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {contextHolder}
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
    </div>
  )
}

export default PhoneCode
