import { useState } from 'react'
import { Form, Input } from 'antd'
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

const PictureCode = ({ tailLayout }) => {
  const [picIndex, setPicIndex] = useState(0)
  const [showPic, setShowPic] = useState(false)
  const changePic = () => {
    setPicIndex(Math.ceil(Math.random() * 9))
  }

  return (
    <div>
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
          <Input placeholder="验证码" onFocus={() => setShowPic(true)} />
        </Form.Item>
        <img
          src={verifyList[picIndex]}
          alt=""
          style={{ height: '40px', cursor: 'pointer', display: showPic ? 'inline-block' : 'none' }}
          onClick={changePic}
        />
      </Form.Item>
    </div>
  )
}

export default PictureCode
