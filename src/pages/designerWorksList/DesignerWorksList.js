import './DesignerWorksList.less'
import { Col, Row } from 'antd'
import WorkListDesignerInfo from './workListDesignerInfo/WorkListDesignerInfo'
import WorksCollection from './worksCollection/WorksCollection'

const DesignerWorksList = () => {
  return (
    <div className="designer-works-list-container">
      <Row gutter={[70, 10]}>
        <Col span={8}>
          <WorkListDesignerInfo />
        </Col>
        <Col span={16}>
          <WorksCollection />
        </Col>
      </Row>
    </div>
  )
}

export default DesignerWorksList
