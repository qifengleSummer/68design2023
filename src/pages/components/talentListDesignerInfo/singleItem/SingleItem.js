import './SingleItem.less'
import { Link } from 'react-router-dom'
import CommonButton from '@/pages/components/commonButton/CommonButton'
import PersonalAvatar from '@/pages/components/personalAvatar/PersonalAvatar'
import TagList from '@/pages/components/tagList/TagList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchTodos } from '@/store/talentListSlice/index'

const SingleItem = () => {
  const [list, setList] = useState([])
  const dispatch = useDispatch()
  const { filterIndustryStore, filterWorkTypeStore, pageNum } = useSelector(
    (state) => state.talentList
  ) // 获取store

  useEffect(() => {
    fetchData()
  }, [filterIndustryStore, filterWorkTypeStore, pageNum])

  const fetchData = async () => {
    try {
      const res = await dispatch(fetchTodos()).unwrap()
      setList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return list.map((item, index) => (
    <li key={index} className="talent-list-li">
      <div className="avatar-container">
        <Link to="/designer-personal-space">
          <PersonalAvatar />
        </Link>
        <div className="desiner-introduce">
          <Link className="designer-name" to="/designer-personal-space">
            <b>{item.name}</b>
          </Link>
          <p className="designer-type">{item.level}级服务方</p>
          <p className="designer-tag">
            <span className="designer-tag-type">{item.type}</span>
            <span className="designer-tag-time">{item.time}年</span>
          </p>
        </div>
      </div>
      <div className="designer-price-container">
        <b className="designer-price">{item.price}</b>/月
        <div className="designer-price-tag">
          <TagList
            consistentColor={{ backgroundColor: '#0CC0F4', color: '#fff' }}
            tagList={item.tagList}
          />
        </div>
      </div>
      <div className="work-scope">
        <TagList
          consistentColor={{ backgroundColor: '#F2F7F2', color: '#666' }}
          tagList={item.workType}
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
