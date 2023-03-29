import './SingleMenuFilter.less'
import { Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const SingleMenuFilter = ({ singleItem, actionName, actionPageName }) => {
  const dispatch = useDispatch()
  const [list, setList] = useState(singleItem.children)
  const [filterLabel, setFilterLabel] = useState(singleItem.val)

  const filterWorks = (item) => {
    dispatch({ type: actionPageName, payload: 1 }) // 当查询条件切换时，页码重置为1
    dispatch({ type: actionName, payload: item.key }) // 根据查询条件请求数据
    setFilterLabel(item.val)
  }

  return (
    <div className="single-menu-filter-container">
      <Dropdown
        menu={{ list }}
        placement="bottom"
        arrow
        overlayClassName="single-menu-filter-list"
        dropdownRender={() => (
          <ul>
            {list.map((item) => (
              <li
                className="single-menu-filter-list-link"
                key={item.key}
                onClick={() => filterWorks(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      >
        <span className={`single-menu-filter-${singleItem.key}`}>
          <Space>
            <span>{filterLabel}</span>
            <DownOutlined />
          </Space>
        </span>
      </Dropdown>
    </div>
  )
}
export default SingleMenuFilter
