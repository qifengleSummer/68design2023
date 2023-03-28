import './TalentListDesignerInfo.less'
import SingleItem from './singleItem/SingleItem'
import TalentPagination from './talentPagination/TalentPagination'

const TalentListDesignerInfo = () => {
  return (
    <div>
      <ul className="talent-list-ul">
        <SingleItem />
      </ul>
      <TalentPagination />
    </div>
  )
}

export default TalentListDesignerInfo
