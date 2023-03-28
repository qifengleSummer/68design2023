import { Pagination } from 'antd'
import { useState } from 'react'
import { filterPageNum } from '@/store/talentListSlice/index'
import { useDispatch } from 'react-redux'

const TalentPagination = () => {
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(1)

  const onChange = (page) => {
    dispatch(filterPageNum(page))
    setCurrent(page)
  }
  return <Pagination current={current} onChange={onChange} total={50} />
}

export default TalentPagination
