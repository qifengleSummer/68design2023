import './DesignerPersonalSpace.less'
import { Col, Row } from 'antd'
import PersonalInfoIntro from '@/pages/components/personalInfoIntro/PersonalInfoIntro'
import WorkContact from './workContact/WorkContact'

const DesignerPersonalSpace = () => {
  return (
    <div className="designer-personal-space">
      <Row gutter={[26, 10]}>
        <Col span={19}>
          <PersonalInfoIntro />
          <div>作品案例</div>
        </Col>
        <Col span={5}>
          <WorkContact />
        </Col>
      </Row>
    </div>
  )
}

export default DesignerPersonalSpace
