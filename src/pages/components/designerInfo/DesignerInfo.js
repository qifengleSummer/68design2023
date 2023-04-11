import './DesignerInfo.less'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CommonButton from '@/pages/components/commonButton/CommonButton'
import picDesigner from '@/assets/imgs/homePage/designer.jpg'
import { apiGet } from '@/service/reqMethod.js'

const DesignerInfo = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await apiGet({ url: '/designerList' })
      setList(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ul className="desiner-info-container">
      {list.map((item) => (
        <li key={item.id}>
          <div>
            <Link to="/designer-personal-space">
              <img className="designer-avatar" src={picDesigner} alt="" />
            </Link>
          </div>
          <div className="designer-name">
            <Link className="designer-name-name" to="/designer-personal-space">
              {item.name}
            </Link>
            <span
              className={[
                'designer-name-type',
                `${item.type === 'S' ? 'designer-price-tag-s' : ''}`,
              ].join(' ')}
            >
              {item.type}级服务方
            </span>
          </div>
          <div className="designer-price">
            <span className="designer-price-price">
              <b className="designer-price-num">{item.price}</b>/月
            </span>
            <span className="designer-price-tag">{item.priceTag}</span>
          </div>
          <div className="designer-tag">
            {item.tag.map((info) => (
              <span key={info} className="designer-tag-item">
                {info}
              </span>
            ))}
          </div>
          <p className="designer-introduce">{item.desc}</p>
          <div className="designer-hire-button">
            <CommonButton
              title="可雇"
              size="middle"
              emphasize
              fontEmphasize
              fontSize="16"
              navUrl="/designer-personal-space"
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default DesignerInfo
