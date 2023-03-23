import './WorksList.less'
import WorksCollectionList from '@/pages/components/worksCollectionList/WorksCollectionList'

const WorksList = () => {
  return (
    <div className="work-list-container">
      <WorksCollectionList widthVal="20" />
    </div>
  )
}

export default WorksList
