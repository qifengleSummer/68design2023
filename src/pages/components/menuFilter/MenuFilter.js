import './MenuFilter.less'
import SingleMenuFilter from './singleMenuFilter/SingleMenuFilter'
import {
  WORK_COLLECTION_CATEGORY,
  WORK_COLLECTION_NEW_WORK,
  WORK_COLLECTION_JUDGE,
  WORK_COLLECTION_PAGE_NUM,
} from '@/store/workCollectionSlice'
const list = [
  {
    key: 'all',
    label: '全部分类',
    val: '全部分类',
    actionName: WORK_COLLECTION_CATEGORY,
    children: [
      { key: 'all11', label: '全部', val: '全部分类' },
      { key: 'all12', label: '平面', val: '平面' },
      { key: 'all121', label: '网页', val: '网页' },
      { key: 'all122', label: '电商', val: '电商' },
      { key: 'all123', label: 'UI', val: 'UI' },
      { key: 'all124', label: '插画', val: '插画' },
      { key: 'all125', label: '三维', val: '三维' },
      { key: 'all126', label: '摄影', val: '摄影' },
      { key: 'all127', label: '空间', val: '空间' },
      { key: 'all128', label: '工业', val: '工业' },
      { key: 'all129', label: '其他', val: '其他' },
    ],
  },
  {
    key: 'newWorks',
    label: '最新作品',
    val: '最新作品',
    actionName: WORK_COLLECTION_NEW_WORK,
    children: [
      { key: 'newWorks1', label: '好评最多', val: '好评最多' },
      { key: 'newWorks2', label: '查看最多', val: '查看最多' },
      { key: 'newWorks3', label: '评论最多', val: '评论最多' },
      { key: 'newWorks4', label: '最新作品', val: '最新作品' },
    ],
  },
  {
    key: 'assessment',
    label: '所有评审',
    val: '所有评审',
    actionName: WORK_COLLECTION_JUDGE,
    children: [
      { key: 'assessment1', label: '所有', val: '所有评审' },
      { key: 'assessment2', label: '主推', val: '主推' },
      { key: 'assessment3', label: '优秀', val: '优秀' },
      { key: 'assessment4', label: '优选', val: '优选' },
    ],
  },
]

const MenuFilter = () => {
  return (
    <div className="menu-filter-container">
      {list.map((item) => (
        <SingleMenuFilter
          key={item.label}
          singleItem={item}
          actionName={item.actionName}
          actionPageName={WORK_COLLECTION_PAGE_NUM}
        />
      ))}
    </div>
  )
}
export default MenuFilter
