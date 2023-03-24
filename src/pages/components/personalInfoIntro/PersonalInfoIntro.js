import './PersonalInfoIntro.less'
import { EnvironmentOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import PersonalAvatar from '@/pages/components/personalAvatar/PersonalAvatar'
import TagList from '@/pages/components/tagList/TagList'

const PersonalInfoIntro = () => {
  return (
    <div className="personal-info-tro">
      <PersonalAvatar />
      <div className="personal-introduce">
        <p className="name">
          <b>谢名字</b>
        </p>
        <p className="desinger-level">
          <TagList
            consistentColor={{ backgroundColor: '#009836', color: '#fff' }}
            tagList={[{ text: 'D级服务方' }]}
          />
        </p>
        <div>
          <Space>
            <EnvironmentOutlined />
            长春
          </Space>
        </div>
        <div className="experience">
          <span className="ex-label">电商设计</span>
          <span className="ex-direction">APP设计,数据可视化</span>
          <span className="ex-time-label">经验</span>
          <span className="ex-time">10年</span>
        </div>
        <pre className="desinger-desc">
          1、10年以上资深UI设计，主导过交通大数据可视化大屏，人大驾驶舱大数据可视化大屏、电商、官网、APP、小程序、B端、社交、电信/移动充值平台等项目交互设计，UI设计；
          2、参与业务项目，竞品分析，挖掘痛点，设计规范，输出交互设计文档；
          3、设计主流工具sketch、Figma、MasterGo、Photoshop、iIIustrator、protopie、Axure
          RP9等；懂前端代码div+css、HTML5+css3、JavaScript、jquery等。
        </pre>
      </div>
    </div>
  )
}

export default PersonalInfoIntro
