import './TalentList.less'
import TalentListDesignerInfo from '@/pages/components/talentListDesignerInfo/TalentListDesignerInfo'
import FilterCriteria from './filterCriteria/FilterCriteria'

const TalentList = () => {
  return (
    <div className="talent-list-container">
      <div style={{ height: '230px' }}>
        <FilterCriteria />
      </div>
      <div>
        <TalentListDesignerInfo />
      </div>
    </div>
  )
}
export default TalentList
