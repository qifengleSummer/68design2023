import './WorkListDesignerInfo.less'
import {
  EnvironmentOutlined,
  UserOutlined,
  TrademarkOutlined,
  PlusOutlined,
  MailOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import { Form, Input, Avatar, Space } from 'antd'
import CommonButton from '@/pages/components/commonButton/CommonButton'
const { TextArea } = Input

const WorkListDesignerInfo = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const addFocus = (e) => {
    console.log('Failed:', e)
  }
  const consulting = (e) => {
    console.log('Failed:', e)
  }
  const getPrice = (e) => {
    console.log('Failed:', e)
  }
  return (
    <div className="work-list-designer-info">
      <div className="information-1">
        <div className="avatar-container">
          <Avatar
            className="avatar-img"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <ul className="desiner-introduce">
            <li className="desiner-introduce-li desiner-introduce-name">
              <b>地以超</b>
              <span className="desiner-introduce-name-icon">
                <UserOutlined />
                <TrademarkOutlined />
              </span>
            </li>
            <li className="desiner-introduce-li">电商设计师，网页设计师</li>
            <li className="desiner-introduce-li">
              武汉 <EnvironmentOutlined />
            </li>
          </ul>
        </div>
        <div className="designer-info-action-btn">
          <div className="add-focus-btn">
            <CommonButton
              padNumber="30"
              size="large"
              fontSize="16"
              setIcon={<PlusOutlined />}
              btnClicked={addFocus}
              title="加关注"
              emphasize
            />
          </div>
          <div className="consulting-btn">
            <CommonButton
              padNumber="30"
              size="large"
              fontSize="16"
              setIcon={<MailOutlined />}
              btnClicked={consulting}
              title="雇佣咨询"
            />
          </div>
        </div>
        <ul className="correlation-index">
          <li className="correlation--index-label">
            <span>影响力</span>
            <p>
              <span className="correlation-index-area">
                全国 <span className="correlation-index-val">36</span>
              </span>
              <span className="correlation-index-area">
                湖北 <span className="correlation-index-val">4</span>
              </span>
            </p>
          </li>
          <li className="correlation--index-label">
            <span>人气</span>
            <p className="correlation-index-val">1160153</p>
          </li>
          <li className="correlation--index-label">
            <span>作品</span>
            <p className="correlation-index-val">218</p>
          </li>
          <li className="correlation--index-label">
            <span>关注我</span>
            <p className="correlation-index-val">234</p>
          </li>
          <li className="correlation--index-label">
            <span>我关注</span>
            <p className="correlation-index-val">53</p>
          </li>
          <li className="correlation--index-label">
            <span className="emphasis-label">加好友</span>
            <p className="correlation-index-val">4</p>
          </li>
          <li className="correlation--index-label">
            <span className="emphasis-label">
              <Space size="small">
                辅助认证
                <QuestionCircleOutlined />
              </Space>
            </span>
            <p className="correlation-index-val">12</p>
          </li>
        </ul>
        <p className="identity-activation-date">
          <span>身份</span>
          <span className="identity-label">魔创视觉 创意总监</span>
        </p>
        <p className="identity-activation-date activation-date-detail">
          <span className="activation-date">开通日期：2015-08-08</span>
          <span>投诉</span>
        </p>
      </div>
      <div className="information-2">
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="任务名称" />
          </Form.Item>

          <Form.Item
            name="desc"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <TextArea rows={4} placeholder="要求描述" />
          </Form.Item>
          <Form.Item
            wrapperCol={{ span: 11 }}
            name="desc"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input placeholder="预算" />
          </Form.Item>
          <Form.Item
            wrapperCol={{ span: 11 }}
            name="desc"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input placeholder="手机" />
          </Form.Item>

          <Form.Item>
            <CommonButton size="middle" emphasize btnClicked={getPrice} title="获取我的报价" />
          </Form.Item>
        </Form>
      </div>
      <p className="designer-copyright">
        © <span className="designer-copyright-name">地以超</span>{' '}
        版权所有，未经允许，请勿用于任何用途。
      </p>
    </div>
  )
}

export default WorkListDesignerInfo
