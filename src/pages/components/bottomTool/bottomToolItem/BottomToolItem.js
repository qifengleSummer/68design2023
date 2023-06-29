import './BottomToolItem.less'
import { useEffect, useState } from 'react'

const BottomToolItem = ({ item, len }) => {
  const [oldTop, setOldTop] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
    return window.removeEventListener('scroll', handleScroll)
  })
  const handleScroll = () => {
    let y = document.documentElement.scrollTop
    setOldTop(y)
  }
  return (
    <li
      className={[
        'bottom-tool-item',
        len === item.index || (oldTop === 0 && item.index === 5) ? 'last-item-style' : '',
        oldTop === 0 && len === item.index ? 'hide-last-child' : '',
      ].join(' ')}
    >
      <div className="bottom-tool-item-content">
        <br />
        <p>{item.icon}</p>
        {item.text1}
        <br />
        {item.text2}
      </div>
    </li>
  )
}

export default BottomToolItem
