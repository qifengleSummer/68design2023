import SingleTag from './singleTag/SingleTag'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const TagList = (props) => {
  const dispatch = useDispatch()
  const [activeIndex, setActiveIndex] = useState(0)

  const changeActiveIndex = (index) => {
    setActiveIndex(index)
    dispatch({ payload: index, type: props.actionName }) // 更新store
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
