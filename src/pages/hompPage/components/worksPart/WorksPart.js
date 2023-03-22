import './WorksPart.less'
import { Link } from 'react-router-dom'
import WorkItemDetail from '@/pages/components/workItemDetail/WorkItemDetail'

const WorksPart = () => {
  return (
    <div className="works-part-container">
      <div className="works-part-title">
        <Link className="works-part-title-a">
          <b>精选作品</b>
        </Link>
        <Link className="works-part-title-a">
          <b>最新作品</b>
        </Link>
      </div>
      <WorkItemDetail detailConfig={{ needAuthorName: true, needStar: true }} />
    </div>
  )
}

export default WorksPart
