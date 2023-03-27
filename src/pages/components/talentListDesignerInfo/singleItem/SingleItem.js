import './SingleItem.less'
import { Link } from 'react-router-dom'
import CommonButton from '@/pages/components/commonButton/CommonButton'
import PersonalAvatar from '@/pages/components/personalAvatar/PersonalAvatar'
import TagList from '@/pages/components/tagList/TagList'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const SingleItem = () => {
  const [list, setList] = useState([])
  const { filterIndustryStore, filterWorkTypeStore } = useSelector((state) => state.talentList) // 获取store
  useEffect(() => {
    setTimeout(() => {
      // 请求数据
      let tlist = new Array(Math.ceil(Math.random() * 5) + 1).fill({ a: '111' })
      setList(tlist)
    }, 1000)
  }, [filterIndustryStore, filterWorkTypeStore])

  return list.map((item, index) => (
    <li key={index} className="talent-list-li">
      <div className="avatar-container">
        <Link to="/designer-personal-space">
          <PersonalAvatar />
        </Link>
        <div className="desiner-introduce">
          <Link className="designer-name" to="/designer-personal-space">
            <b>谢名字</b>
          </Link>
          <p className="designer-type">D级服务方</p>
          <p className="designer-tag">
            <span className="designer-tag-type">网站设计</span>
            <span className="designer-tag-time">10年</span>
          </p>
        </div>
      </div>
      <div className="designer-price-container">
        <b className="designer-price">500</b>/月
        <div className="designer-price-tag">
          <TagList
            consistentColor={{ backgroundColor: '#0CC0F4', color: '#fff' }}
            tagList={[{ text: '全职' }, { text: '免费试用' }]}
          />
        </div>
      </div>
      <div className="work-scope">
        <TagList
          consistentColor={{ backgroundColor: '#F2F7F2', color: '#666' }}
          tagList={[{ text: '官网设计' }, { text: '运营类插画' }, { text: 'AI' }]}
        />
      </div>
      <CommonButton
        navUrl="/designer-personal-space"
        title="查看"
        size="middle"
        emphasize
        fontEmphasize
        fontSize="16"
      />
    </li>
  ))
}

export default SingleItem
