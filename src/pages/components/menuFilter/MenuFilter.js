import './MenuFilter.less'
import { Link } from 'react-router-dom'
import SingleMenuFilter from './singleMenuFilter/SingleMenuFilter'
const list = [
  {
    key: 'all',
    label: '全部分类',
    children: [
      { key: 'all11', label: <Link to="/login">全部</Link> },
      { key: 'all12', label: <Link to="/login">平面</Link> },
      { key: 'all121', label: <Link to="/login">网页</Link> },
      { key: 'all122', label: <Link to="/login">电商</Link> },
      { key: 'all123', label: <Link to="/login">UI</Link> },
      { key: 'all124', label: <Link to="/login">插画</Link> },
      { key: 'all125', label: <Link to="/login">三维</Link> },
      { key: 'all126', label: <Link to="/login">摄影</Link> },
      { key: 'all127', label: <Link to="/login">空间</Link> },
      { key: 'all128', label: <Link to="/login">工业/产品</Link> },
      { key: 'all129', label: <Link to="/login">其他</Link> },
    ],
  },
  {
    key: 'newWorks',
    label: '最新作品',
    children: [
      { key: 'newWorks1', label: <Link to="/login">好评最多</Link> },
      { key: 'newWorks2', label: <Link to="/login">查看最多</Link> },
      { key: 'newWorks3', label: <Link to="/login">评论最多</Link> },
      { key: 'newWorks4', label: <Link to="/login">最新作品</Link> },
    ],
  },
  {
    key: 'assessment',
    label: '所有评审',
    children: [
      { key: 'assessment1', label: <Link to="/login">所有</Link> },
      { key: 'assessment2', label: <Link to="/login">主推</Link> },
      { key: 'assessment3', label: <Link to="/login">优秀</Link> },
      { key: 'assessment4', label: <Link to="/login">优选</Link> },
    ],
  },
]

const MenuFilter = () => {
  return (
    <div className="menu-filter-container">
      {list.map((item) => (
        <SingleMenuFilter key={item.label} singleItem={item} />
      ))}
    </div>
  )
}
export default MenuFilter
