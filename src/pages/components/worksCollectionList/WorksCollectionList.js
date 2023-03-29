import WorkItemDetailContainer from '@/pages/components/workItemDetail/WorkItemDetailContainer'
import MenuFilter from '@/pages/components/menuFilter/MenuFilter'
const WorksCollectionList = ({ widthVal = 33.3 }) => {
  return (
    <div>
      <MenuFilter />
      <WorkItemDetailContainer widthVal={widthVal} detailConfig={{ needAuthorName: true }} />
    </div>
  )
}

export default WorksCollectionList
