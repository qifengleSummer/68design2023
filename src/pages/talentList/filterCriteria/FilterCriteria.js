import TagList from '@/pages/components/tagList/TagList'

const tagList = [
  { text: '全部' },
  { text: '品牌设计' },
  { text: '网站设计' },
  { text: '电商设计' },
  { text: 'ui设计' },
  { text: '插画' },
  { text: '室内设计' },
]

const FilterCriteria = () => {
  return (
    <div>
      <TagList
        activeMode
        activeColor={{ backgroundColor: '#14A900', color: '#fff' }}
        tagList={tagList}
      />
    </div>
  )
}

export default FilterCriteria
