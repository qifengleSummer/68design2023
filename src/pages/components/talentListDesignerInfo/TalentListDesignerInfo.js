import './TalentListDesignerInfo.less'
import SingleItem from './singleItem/SingleItem'
import TalentPagination from '../commonPagination/TalentPagination'
import { FILTER_PAGE_NUM } from '@/store/talentListSlice/index'

const TalentListDesignerInfo = () => {
  return (
    <div>
      <ul className="talent-list-ul">
        <SingleItem />
      </ul>
      <TalentPagination actionPageName={FILTER_PAGE_NUM} getStoreName="talentList" />
    </div>
  )
}

export default TalentListDesignerInfo
