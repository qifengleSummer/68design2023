import './DesignPart.less'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import picBrand from '@/assets/imgs/homePage/brand.jpg'
import picUi from '@/assets/imgs/homePage/ui.jpg'
import picWeb from '@/assets/imgs/homePage/web.jpg'
import picBusiness from '@/assets/imgs/homePage/business.jpg'
import picPic from '@/assets/imgs/homePage/picture.jpg'

const list = [
  {
    label: '品牌设计',
    type: 'brand',
    img: picBrand,
    children: [
      {
        label: 'LOGO设计',
      },
      {
        label: '包装设计',
      },
      {
        label: '书刊画册',
      },
      {
        label: '平面物料',
      },
      {
        label: 'VI设计',
      },
      {
        label: '海报',
      },
    ],
  },
  {
    label: 'UI设计',
    type: 'ui',
    img: picUi,
    children: [
      {
        label: 'APP设计',
      },
      {
        label: '小程序',
      },
      {
        label: '软件界面',
      },
      {
        label: 'H5',
      },
      {
        label: '数据可视化',
      },
      {
        label: '交互设计',
      },
    ],
  },
  {
    label: '网站设计',
    type: 'web',
    img: picWeb,
    children: [
      {
        label: '企业官网',
      },
      {
        label: '营销类网站',
      },
      {
        label: '医美网站',
      },
      {
        label: '专题设计',
      },
      {
        label: '前端开发',
      },
      {
        label: '整站开发',
      },
    ],
  },
  {
    label: '电商设计',
    type: 'business',
    img: picBusiness,
    children: [
      {
        label: '化妆美容',
      },
      {
        label: '母婴玩具',
      },
      {
        label: '3C数码',
      },
      {
        label: '家电办公',
      },
      {
        label: '食品保健',
      },
      {
        label: '生活百货',
      },
    ],
  },
  {
    label: '插画',
    type: 'pic',
    img: picPic,
    children: [
      {
        label: '插画',
      },
      {
        label: '吉祥物',
      },
      {
        label: '漫画',
      },
      {
        label: 'IP形象',
      },
      {
        label: '原画',
      },
      {
        label: '表情包',
      },
    ],
  },
]

const DesignPart = () => {
  return (
    <div className="design-part-container">
      <Row justify="space-around">
        {list.map((item) => (
          <Col key={item.label} className="dp-item" span={4}>
            <Link target="_blank" className="dp-img-container" to="/design-part-detail">
              <img className="dp-img" src={item.img} alt="" />
              <span className="dp-img-label">{item.label}</span>
            </Link>
            <div className="detail-list">
              {item.children.map((detail) => (
                <Link
                  target="_blank"
                  key={detail.label}
                  className="dp-link"
                  to="/design-part-detail"
                >
                  {detail.label}
                </Link>
              ))}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default DesignPart
