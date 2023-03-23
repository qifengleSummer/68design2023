// import './TalentList.less'
// import { useState, useEffect } from 'react'
// import { apiGet } from '@/service/reqMethod'
import TalentListDesignerInfo from '@/pages/components/talentListDesignerInfo/TalentListDesignerInfo'

const TalentList = () => {
  // const [list, setList] = useState([])
  // useEffect(() => {
  //   apiGet('/designerList', { a: 33 }).then((res) => {
  //     setList(res.data)
  //   })
  // }, [])
  return (
    <div>
      <div>筛选条件</div>
      <div>
        <TalentListDesignerInfo />
      </div>
    </div>
  )
}
export default TalentList
