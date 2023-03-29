import './TalentPagination.less'
import { Pagination } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TalentPagination = ({ size = 'large', actionPageName, getStoreName }) => {
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(1)
  const { pageNum } = useSelector((state) => state[getStoreName]) // 获取分页的state

  const onChange = (page) => {
    dispatch({ type: actionPageName, payload: page }) // 切换页码
    setCurrent(page)
  }
  useEffect(() => {
    setCurrent(pageNum)
  }, [pageNum])

  return (
    <Pagination
      className="pagination-common-container"
      size={size}
      current={current}
      onChange={onChange}
      total={50}
    />
  )
}

export default TalentPagination
