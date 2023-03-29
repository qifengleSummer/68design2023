import './WorksPart.less'
import { Link } from 'react-router-dom'
import WorkItemDetailContainer from '@/pages/components/workItemDetail/WorkItemDetailContainer'

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
      <WorkItemDetailContainer detailConfig={{ needAuthorName: true, needStar: true }} />
    </div>
  )
}

export default WorksPart
