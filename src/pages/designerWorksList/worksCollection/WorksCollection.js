import './WorksCollection.less'
import WorkItemDetail from '@/pages/components/workItemDetail/WorkItemDetail'
import MenuFilter from '@/pages/components/menuFilter/MenuFilter'
import { useState } from 'react'

const WorksCollection = () => {
  const [tabIndex, setTabIndex] = useState(1)
  const changeTab = (index) => setTabIndex(index)

  return (
    <div className="works-collection-container">
      <p className="works-tab-container">
        <span
          onClick={() => changeTab(1)}
          className={[
            'works-collection-tab',
            `${tabIndex === 1 ? 'works-collection-active' : ''}`,
          ].join(' ')}
        >
          原创
        </span>
        <span
          onClick={() => changeTab(2)}
          className={[
            'works-collection-tab',
            `${tabIndex !== 1 ? 'works-collection-active' : ''}`,
          ].join(' ')}
        >
          收藏
        </span>
      </p>
      <MenuFilter />
      <WorkItemDetail widthVal="33.3" />
    </div>
  )
}

export default WorksCollection
