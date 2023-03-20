import './WorkItemDetail.less'
import { StarFilled, EyeFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import ThumbUp from '../ThumbUp'
import picPic from '../../../assets/imgs/homePage/picture.jpg'

import { apiGet, apiPost } from '@/service/reqMethod'

const list = [
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '草木茶舍 | 泡茶古朴又惊艳',
    author: '黄冠之',
    type: '空间，空间餐饮',
    thumb: '69',
    eye: '3018',
    publishTime: '1天前',
  },
  {
    pic: picPic,
    title: '字体设计 | Font design',
    author: '戴秀',
    type: '平面，字体',
    thumb: '157',
    eye: '6990',
    publishTime: '2天前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
  {
    pic: picPic,
    title: '随风集',
    author: '金昌友',
    type: '网页，企业官网',
    thumb: '57',
    eye: '1990',
    publishTime: '22小时前',
  },
]
const WorkItemDetail = () => {
  const getApiData = () => {
    apiGet('/workItemDetailList', { a: 33 }).then((res) => {
      console.log(res)
    })
    apiPost('/testPost', { a: 1 }).then((res) => {
      console.log(res)
    })
  }
  return (
    <div className="works-part-content-container">
      <br />
      <button onClick={getApiData}>点击获取数据</button>
      <br />
      <br />
      {list.map((item, index) => (
        <div className="works-part-item" key={index}>
          <div className="works-part-content">
            <div className="wp-img">
              <Link>
                <img src={item.pic} alt={item.title} />
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
