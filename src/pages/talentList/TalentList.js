import './TalentList.less'
import TalentListDesignerInfo from '@/pages/components/talentListDesignerInfo/TalentListDesignerInfo'
import FilterCriteria from './filterCriteria/FilterCriteria'

const TalentList = () => {
  const getFilterCondition = () => {

  }
  return (
    <div className="talent-list-container">
      <FilterCriteria getFilterCondition={getFilterCondition}/>
      <TalentListDesignerInfo />
    </div>
  )
}
export default TalentList
