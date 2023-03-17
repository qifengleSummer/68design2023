import './NavSearch.less'
import { Input } from 'antd'
import SearchIcon from './searchIcon/SearchIcon'
import { useState, useRef } from 'react'

const selectData = [
  {
    title: '作品',
    content: '搜索原创设计师作品',
    searchType: 'works',
  },
  {
    title: '服务',
    content: '根据技能搜索设计师',
    searchType: 'service',
  },
  {
    title: '案例',
    content: '搜索参考案例',
    searchType: 'case',
  },
  {
    title: '设计师',
    content: '精准搜索设计师',
    searchType: 'designer',
  },
]

const NavSearch = () => {
  const [stateFocus, setStateFocus] = useState(false)
  const [placeholder, setPlaceholder] = useState('搜索')
  const inputVal = useRef(null)

  const inputOnFocus = () => {
    setStateFocus(true)
  }
  const inputOnBlur = () => {
    // setTimeout(() => { // 延迟多少毫秒才能点到DOM
    setStateFocus(false)
    // }, 160);
  }
  const searchContent = (index) => {
    setPlaceholder(selectData[index].content)
    let val = inputVal.current.input.value
    if (val) {
      window.open(`http://localhost:3000/login?${selectData[index].searchType}=${val}`)
    }
  }

  return (
    <div className="nav-search-container">
      <Input
        className="nav-search"
        placeholder={placeholder}
        prefix={<SearchIcon stateFocus={stateFocus} />}
        onFocus={inputOnFocus}
        onBlur={inputOnBlur}
        ref={inputVal}
      />
      <ul
        className={[
          'search-type-container',
          stateFocus ? 'show-search-type' : 'hide-search-type',
        ].join(' ')}
      >
        {selectData.map((item, index) => (
          <li
            key={item.title}
            onClickCapture={() => searchContent(index)}
            className={[placeholder === item.content ? 'nav-search-active' : '']}
          >
            <b className="one">{item.title}</b>
            <p className="two">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavSearch
