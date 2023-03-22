import './WorkListDesignerInfo.less'
import { EnvironmentOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'

const WorkListDesignerInfo = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="work-list-designer-info">
      <div className="information-1">
        <div className="avatar-container">
          <img src="" alt="" />
          <ul>
            <li>殷见超</li>
            <li>电商设计师，网页设计师</li>
            <li>
              武汉 <EnvironmentOutlined />
            </li>
          </ul>
        </div>
        <div>
          <button>加关注</button>
          <button>雇佣咨询</button>
        </div>
        <ul className="correlation-index">
          <li>
            <span>影响力</span>
            <p>
              <span>全国 36</span>
              <span>湖北 4</span>
            </p>
          </li>
          <li>
            <span>人气</span>
            <p>1160153</p>
          </li>
          <li>
            <span>作品</span>
            <p>218</p>
          </li>
          <li>
            <span>关注我</span>
            <p>234</p>
          </li>
          <li>
            <span>我关注</span>
            <p>53</p>
          </li>
          <li>
            <span>加好友</span>
            <p>4</p>
          </li>
          <li>
            <span>辅助认证</span>
            <p>12</p>
          </li>
        </ul>
        <p>
          <span>身份</span>
          <span>魔创视觉 创意总监</span>
        </p>
        <p>
          <span>开通日期： 2015-08-08</span>
          <span>投诉</span>
        </p>
      </div>
      <div className="information-2">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default WorkListDesignerInfo
