import './WorksCollection.less'
import WorksCollectionList from '@/pages/components/worksCollectionList/WorksCollectionList'
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
      <WorksCollectionList />
    </div>
  )
}

export default WorksCollection
