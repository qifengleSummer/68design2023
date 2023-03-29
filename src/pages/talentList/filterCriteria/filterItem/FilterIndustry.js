import TagList from '@/pages/components/tagList/TagList'
import { FILTER_INDUSTRY_STORE, FILTER_PAGE_NUM } from '@/store/talentListSlice'

const tagList = [
  { text: '全部' },
  { text: '品牌设计' },
  { text: '网站设计' },
  { text: '电商设计' },
  { text: 'ui设计' },
  { text: '插画' },
  { text: '室内设计' },
  { text: '工业设计' },
  { text: '三维设计' },
  { text: '视频动画' },
  { text: '摄影' },
  { text: '网络开发' },
  { text: '运营推广' },
  { text: '其他' },
]

const FilterIndustry = () => {
  return (
    <div className="talent-filter filter-industry-container">
      <span className="talent-filter-babel">行业</span>
      <TagList
        canClick
        talentPageName={FILTER_PAGE_NUM}
        actionName={FILTER_INDUSTRY_STORE}
        activeMode
        activeColor={{ backgroundColor: '#14A900', color: '#fff' }}
        tagList={tagList}
      />
    </div>
  )
}

export default FilterIndustry
