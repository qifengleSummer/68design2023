import TagList from '@/pages/components/tagList/TagList'

const tagList = [{ text: '全部' }, { text: '单个任务' }, { text: '兼职包月' }, { text: '全职包月' }]
const FilterWorkType = () => {
  return (
    <div className="talent-filter filter-work-type-container">
      <span className="talent-filter-babel">方式</span>
      <TagList
        activeMode
        activeColor={{ backgroundColor: '#14A900', color: '#fff' }}
        tagList={tagList}
      />
    </div>
  )
}

export default FilterWorkType