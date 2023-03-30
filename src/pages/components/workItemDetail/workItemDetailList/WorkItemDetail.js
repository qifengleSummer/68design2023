import './WorkItemDetail.less'
import { StarFilled, EyeFilled, DashboardOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Popover } from 'antd'
import ThumbUp from '../../ThumbUp'
import DesignerDetailInfo from '../designerDetailInfo/DesignerDetailInfo.js'
import picPic from '@/assets/imgs/homePage/picture.jpg'
import { getWorkCollectionList } from '@/store/workCollectionSlice'
import { useSelector, useDispatch } from 'react-redux'

const WorkItemDetail = ({ detailConfig, widthVal = 20 }) => {
  const dispatch = useDispatch()
  const [list, setList] = useState([])
  const { pageNum, category, newWork, judge } = useSelector((state) => state.workCollectionList)

  useEffect(() => {
    fetchData()
  }, [pageNum, category, newWork, judge])

  const fetchData = async () => {
    try {
      const res = await dispatch(getWorkCollectionList(pageNum)).unwrap() // 进入设计师collection页面会看到有2个请求
      setList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="works-part-content-container">
      {list.map((item, index) => (
        <div className="works-part-item" key={index} style={{ width: `${widthVal}%` }}>
          <div className="works-part-content">
            <div className="wp-img">
              <Link>
                <img src={picPic} alt={item.title} />
              </Link>
            </div>
            <div className="wp-title">
              <Link className="text-color">{item.title}</Link>
            </div>
            {detailConfig && detailConfig.needAuthorName && (
              <div className="wp-author">
                <Popover
                  placement="bottomLeft"
                  content={<DesignerDetailInfo designerInfo={item} />}
                >
                  <Link className="text-color" to="/designer-works-list">
                    {item.author}
                  </Link>
                </Popover>
              </div>
            )}
            <div className="wp-type">
              <Link to="/works-list" className="text-color">
                {item.type}
              </Link>
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
              {detailConfig && detailConfig.needStar && (
                <span>
                  <StarFilled style={{ fontSize: '16px', color: '#08c' }} />
                  {item.publishTime}
                </span>
              )}

              {!detailConfig && (
                <span>
                  <DashboardOutlined style={{ fontSize: '16px', color: '#08c' }} />
                  {item.publishTime}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkItemDetail
