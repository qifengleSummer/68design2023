import './WorkContact.less'
import TagList from '@/pages/components/tagList/TagList'
import CommonButton from '@/pages/components/commonButton/CommonButton'
import { HeartOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import iconAuth from '@/assets/imgs/ico-auth.png'

const WorkContact = () => {
  const btnClicked = () => {}
  return (
    <div className="personal-contact-container">
      <Space>
        <b className="p-price">8K</b>
        <span>元/月</span>
        <TagList tagList={[{ color: '#0CC0F4', text: '全职' }]} />
      </Space>
      <p className="less-work-time">
        工作日不少于 <span className="detail-work-time">3</span> 小时
      </p>
      <p>时间：9：00—18：00</p>
      <div className="consultant-btn">
        <CommonButton
          btnClicked={btnClicked}
          title="立即咨询"
          size="large"
          emphasize
          fontSize="18"
        />
      </div>
      <Space className="choice-service" size="large">
        <div>
          <div>
            <HeartOutlined style={{ fontSize: '28px' }} />
          </div>
          候选
        </div>
        <div>
          <div>
            <CustomerServiceOutlined style={{ fontSize: '28px' }} />
          </div>
          客服
        </div>
      </Space>
      <div className="statistics border-top-f1">
        <p className="g_mb10">工作统计</p>
        <p>
          <b className="fontSize18">2</b>
        </p>
        <p>总订单</p>
      </div>
      <div className="authentication border-top-f1">
        <p className="auth-p">
          实名认证
          <img className="auth-item" src={iconAuth} alt="" />
        </p>
        <p className="auth-p">
          手机认证
          <img className="auth-item" src={iconAuth} alt="" />
        </p>
      </div>
    </div>
  )
}

export default WorkContact
