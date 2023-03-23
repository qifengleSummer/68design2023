import { Tag } from 'antd'
const TagList = ({ tagList, fontColor }) => {
  return tagList.map((item) => {
    return (
      <Tag key={item.text} color={item.color} style={{ color: fontColor }}>
        {item.text}
      </Tag>
    )
  })
}

export default TagList
