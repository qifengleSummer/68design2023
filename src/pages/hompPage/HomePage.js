import './HomePage.less'
import { Space } from 'antd'

import CommonButton from '../components/commonButton/CommonButton'
import DesignPart from './components/designPart/DesignPart'
import WorksPart from './components/worksPart/WorksPart'
import DesignerInfo from '@/pages/components/designerInfo/DesignerInfo'

const Index = () => {
  return (
    <div className="home-page-container">
      <section className="home-body">
        <h2 className="homepage-title-h2"> 为您的业务寻找更好的设计师 </h2>
        <h3 className="homepage-title-h3">300万设计师在用的远程雇佣平台，100+设计细分领域</h3>
        <div className="homepage-title-btn">
          <Space size="large">
            <CommonButton
              title="免费发布任务"
              size="large"
              padNumber="30"
              emphasize
              navUrl="/login"
            />
            <CommonButton title="设计师入住" size="large" padNumber="30" navUrl="/login" />
          </Space>
        </div>
        <p className="homepage-title-text">最快5分钟内获取合适人选及报价，沟通满意后再雇佣</p>
        <DesignPart />
        <WorksPart />
        <h2 className="freelance-designers">推荐自由设计师</h2>
        <DesignerInfo />

        <div className="adv-team-container">
          <h2 className="adv-team-p1">组建您的线上设计团队</h2>
          <p className="adv-team-p2">随时随地与需要的设计师远程协作，轻松管理、全程保障</p>
          <CommonButton
            title="免费使用"
            size="large"
            padNumber="40"
            emphasize
            fontEmphasize
            fontSize="16"
            bgColor="#fff"
            color="#14A900"
            navUrl="/login"
          />
        </div>
      </section>
    </div>
  )
}

export default Index
