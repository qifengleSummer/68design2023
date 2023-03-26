import './TalentList.less'
import TalentListDesignerInfo from '@/pages/components/talentListDesignerInfo/TalentListDesignerInfo'
import FilterCriteria from './filterCriteria/FilterCriteria'

const TalentList = () => {
  return (
    <div className="talent-list-container">
      <FilterCriteria />
      <TalentListDesignerInfo />
    </div>
  )
}
export default TalentList
