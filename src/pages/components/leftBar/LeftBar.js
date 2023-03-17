import './LeftBar.less'
import { CaretDownOutlined } from '@ant-design/icons'

const userTypeList = [
  {
    title: '找设计师',
  },
  {
    title: '找工作',
  },
]

const LeftBar = () => (
  <div className="left-bar-container">
    <ul className="user-type-ul">
      {userTypeList.map((item) => {
        return (
          <li className="left-bar-item" key={item.title}>
            {item.title} <CaretDownOutlined />
          </li>
        )
      })}
    </ul>
  </div>
)

export default LeftBar
