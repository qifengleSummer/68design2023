import './WorkItemDetailContainer.less'
import WorkItemDetail from './workItemDetailList/WorkItemDetail'
import TalentPagination from '@/pages/components/commonPagination/TalentPagination'
import { WORK_COLLECTION_PAGE_NUM } from '@/store/workCollectionSlice'

const WorkItemDetailContainer = ({ detailConfig, widthVal = 20 }) => {
  return (
    <div className="works-part-content-container">
      <WorkItemDetail detailConfig={detailConfig} widthVal={widthVal} />
      <TalentPagination
        actionPageName={WORK_COLLECTION_PAGE_NUM}
        getStoreName="workCollectionList"
      />
    </div>
  )
}

export default WorkItemDetailContainer
