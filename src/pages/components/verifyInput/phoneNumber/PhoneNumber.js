import { Form, Input } from 'antd'
import { useSelector } from 'react-redux'
import { adapterLoginEntities } from '@/store/loginSlice/index.js'
import { useLocation } from 'react-router-dom'

const PhoneNumber = ({ tailLayout }) => {
  let location = useLocation()
  let loginData = useSelector(adapterLoginEntities)

  return (
    <div>
      <Form.Item
        {...tailLayout}
        name="phoneNo"
        rules={[
          {
            validator: (rule, value) => {
              if (!value) return Promise.reject(new Error('请输入手机号'))
              const reg = /^1[3456789]\d{9}$/
              if (!reg.test(value)) return Promise.reject(new Error('输入的手机号格式不正确'))
              if (loginData[value] && location.pathname === '/register')
                return Promise.reject(new Error('该手机号已注册，请更换其他手机号'))
              return Promise.resolve()
            },
          },
        ]}
      >
        <Input placeholder="手机号" />
      </Form.Item>
    </div>
  )
}

export default PhoneNumber
