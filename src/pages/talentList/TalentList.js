import './TalentList.less'
import TalentListDesignerInfo from '@/pages/components/talentListDesignerInfo/TalentListDesignerInfo'

const TalentList = () => {
  return (
    <div className="talent-list-container">
      <div style={{ height: '230px' }}>筛选条件</div>
      <div>
        <TalentListDesignerInfo />
      </div>
    </div>
  )
}
export default TalentList
