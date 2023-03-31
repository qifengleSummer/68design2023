import WorkItemDetailContainer from '@/pages/components/workItemDetail/WorkItemDetailContainer'
import MenuFilter from '@/pages/components/menuFilter/MenuFilter'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { STORE_RESET } from '@/store/workCollectionSlice'

const WorksCollectionList = ({ widthVal = 33.3 }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch({ type: STORE_RESET })
    }
  })
  return (
    <div>
      <MenuFilter />
      <WorkItemDetailContainer widthVal={widthVal} />
    </div>
  )
}

export default WorksCollectionList
