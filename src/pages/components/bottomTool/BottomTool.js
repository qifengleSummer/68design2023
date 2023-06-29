import './BottomTool.less'
import BottomToolItem from './bottomToolItem/BottomToolItem'
import { UpOutlined } from '@ant-design/icons'

const bottomArr = [
  {
    text1: '发布',
    text2: '任务',
    index: 1,
    content: ['微信', '图片', '底部文字', '底部icon'],
  },
  {
    text1: '个人',
    text2: '中心',
    index: 2,
    content: [],
  },
  {
    text1: '在线',
    text2: '客服',
    index: 3,
    content: ['微信', '图片', '底部文字', '底部icon'],
  },
  {
    text1: '关注',
    text2: '我们',
    index: 4,
    content: ['微信', '图片', '底部文字', '底部icon'],
  },
  {
    text1: '问题',
    text2: '反馈',
    index: 5,
    content: [],
  },
  {
    text1: '顶部',
    index: 6,
    icon: <UpOutlined style={{ verticalAlign: 'top' }} />,
    content: [],
  },
]

const BottomTool = () => {
  return (
    <div className="bottom-tool-container">
      <ul className="bottom-tool-ul">
        {bottomArr.map((item) => {
          return <BottomToolItem key={item.text1} item={item} len={bottomArr.length} />
        })}
      </ul>
    </div>
  )
}

export default BottomTool
