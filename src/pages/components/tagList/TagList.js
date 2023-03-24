import SingleTag from './singleTag/SingleTag'
import { useState } from 'react'
const TagList = (props) => {
  let [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="common-tag-list-container" style={{ display: 'inline-block' }}>
      {props.tagList.map((item, index) => (
        <SingleTag
          key={index}
          tagConfig={props}
          singleData={item}
          setActiveIndexF={setActiveIndex}
          currIndex={index}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  )
}

export default TagList
