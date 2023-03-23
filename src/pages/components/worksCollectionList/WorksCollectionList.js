import WorkItemDetail from '@/pages/components/workItemDetail/WorkItemDetail'
import MenuFilter from '@/pages/components/menuFilter/MenuFilter'
const WorksCollectionList = ({ widthVal = 33.3 }) => {
  return (
    <div>
      <MenuFilter />
      <WorkItemDetail widthVal={widthVal} />
    </div>
  )
}

export default WorksCollectionList
