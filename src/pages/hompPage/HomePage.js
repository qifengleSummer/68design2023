import './HomePage.less'
import { useNavigate } from 'react-router-dom'
import { Space } from 'antd'
import TopHeader from '../components/header/Header'
import CommonButton from '../components/commonButton/CommonButton'
import DesignPart from './components/designPart/DesignPart'

const Index = () => {
  const navigate = useNavigate()
  const btnClicked = (type) => {
    switch (type) {
      case 2:
        navigate('/login')
        break
      default:
        navigate('/login')
        break
    }
  }
  return (
    <div className="home-page-container">
      <TopHeader />
      <section className="home-body">
        <h2 className="homepage-title-h2"> 为您的业务寻找更好的设计师 </h2>
        <h3 className="homepage-title-h3">300万设计师在用的远程雇佣平台，100+设计细分领域</h3>
        <div className="homepage-title-btn">
          <Space size="large">
            <CommonButton
              btnClicked={() => btnClicked(1)}
              title="免费发布任务"
              size="large"
              padNumber="30"
              emphasize
            />
            <CommonButton
              btnClicked={() => btnClicked(2)}
              title="设计师入住"
              size="large"
              padNumber="30"
            />
          </Space>
        </div>
        <p className="homepage-title-text">最快5分钟内获取合适人选及报价，沟通满意后再雇佣</p>
        <DesignPart />
      </section>
    </div>
  )
}

export default Index
