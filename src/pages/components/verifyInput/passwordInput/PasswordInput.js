import { Form, Input } from 'antd'

const PasswordInput = ({ tailLayout }) => {
  return (
    <div>
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
    </div>
  )
}

export default PasswordInput
