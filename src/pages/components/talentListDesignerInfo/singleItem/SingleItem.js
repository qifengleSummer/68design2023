import './SingleItem.less'
import { Link, useNavigate } from 'react-router-dom'
import CommonButton from '@/pages/components/commonButton/CommonButton'
import PersonalAvatar from '@/pages/components/personalAvatar/PersonalAvatar'
import TagList from '@/pages/components/tagList/TagList'

const list = [
  {
    a: 1,
  },
  {
    a: 13,
  },
  {
    a: 14,
  },
  {
    a: 15,
  },
  {
    a: 16,
  },
  {
    a: 17,
  },
]

const SingleItem = () => {
  const navigate = useNavigate()
  const btnClicked = () => navigate('/designer-personal-space')
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
            tagList={[
              { color: '#0CC0F4', text: '全职' },
              { color: '#0CC0F4', text: '免费试用' },
            ]}
          />
        </div>
      </div>
      <div className="work-scope">
        <TagList
          fontColor="#666"
          tagList={[
            { color: '#F2F7F2', text: '官网设计' },
            { color: '#F2F7F2', text: '运营类插画' },
            { color: '#F2F7F2', text: 'AI' },
          ]}
        />
      </div>
      <CommonButton
        btnClicked={btnClicked}
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
