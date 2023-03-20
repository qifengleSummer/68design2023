import './WorkItemDetail.less'
import { StarFilled, EyeFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ThumbUp from '../ThumbUp'
import picPic from '../../../assets/imgs/homePage/picture.jpg'
import { apiGet } from '@/service/reqMethod'

const WorkItemDetail = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    apiGet('/workItemDetailList', { a: 33 }).then((res) => {
      setList(res.data)
    })
  }, [])

  return (
    <div className="works-part-content-container">
      {list.map((item, index) => (
        <div className="works-part-item" key={index}>
          <div className="works-part-content">
            <div className="wp-img">
              <Link>
                <img src={picPic} alt={item.title} />
              </Link>
            </div>
            <div className="wp-title">
              <Link className="text-color">{item.title}</Link>
            </div>
            <div className="wp-author">
              <Link className="text-color">{item.author}</Link>
            </div>
            <div className="wp-type">
              <Link className="text-color">{item.type}</Link>
            </div>
            <div className="wp-star">
              <span>
                <ThumbUp style={{ fontSize: '16px', color: '#08c' }} />
                {item.thumb}
              </span>

              <span>
                <EyeFilled style={{ fontSize: '16px', color: '#08c' }} />
                {item.eye}
              </span>
              <span>
                <StarFilled style={{ fontSize: '16px', color: '#08c' }} />
                {item.publishTime}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkItemDetail
