import './SingleMenuFilter.less'
import { Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import { useState } from 'react'
const SingleMenuFilter = ({ singleItem }) => {
  const [list, setList] = useState(singleItem.children)
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
              <li className="single-menu-filter-list-link" key={item.key}>
                {item.label}
              </li>
            ))}
          </ul>
        )}
      >
        <span className={`single-menu-filter-${singleItem.key}`}>
          <Space>
            <span>{singleItem.label}</span>
            <DownOutlined />
          </Space>
        </span>
      </Dropdown>
    </div>
  )
}
export default SingleMenuFilter
