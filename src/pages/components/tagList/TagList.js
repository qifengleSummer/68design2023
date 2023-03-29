import SingleTag from './singleTag/SingleTag'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const TagList = (props) => {
  const dispatch = useDispatch()
  const [activeIndex, setActiveIndex] = useState(0)

  const changeActiveIndex = (index) => {
    if (!props.canClick) return // 不是所有tag都能被点击
    setActiveIndex(index)
    dispatch({ payload: index, type: props.actionName }) // 更新state，tagList中active的single tag
    dispatch({ payload: 1, type: props.talentPageName }) // 切换tag后，要重置当前tag里的页码为1
  }

  return (
    <div className="common-tag-list-container" style={{ display: 'inline-block' }}>
      {props.tagList.map((item, index) => (
        <SingleTag
          key={index}
          tagConfig={props}
          singleData={item}
          setActiveIndexF={changeActiveIndex}
          currIndex={index}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  )
}

export default TagList
