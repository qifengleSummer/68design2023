import './TalentList.less'
import TalentListDesignerInfo from '@/pages/components/talentListDesignerInfo/TalentListDesignerInfo'
import FilterCriteria from './filterCriteria/FilterCriteria'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { STORE_RESET } from '@/store/talentListSlice'

const TalentList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch({ type: STORE_RESET })
    }
  })
  return (
    <div className="talent-list-container">
      <FilterCriteria />
      <TalentListDesignerInfo />
    </div>
  )
}

export default TalentList
