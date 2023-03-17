import './NavHorizontal.less'
import { Link } from 'react-router-dom';
import { List } from 'antd';
import NavListChild from "./component/navListChild/NavListChild";

const data = [
    {
      title: '作品',
    },
    {
      title: '人才',
    },
    {
      title: '设计部',
      children: [
        {
          label: '品牌设计',
          type: '1',
        },
        {
          label: '网站设计',
          type: '2',
        },
        {
          label: '电商设计',
          type: '3'
        },
        {
          label: 'UI设计',
          type: '4'
        },
        {
          label: '插画',
          type: '5'
        },
        {
          label: '摄影',
          type: '6'
        },
        {
          label: '室内设计',
          type: '7'
        },
        {
          label: '工业设计',
          type: '8'
        },
      ]
    },
    {
      title: '案例',
    },
    {
      title: '···',
      children: [
        {
          label: '工具',
          type: 'tools',
          children: [{
            label: '酷站',
            type: 'cool',
          },
          {
            label: '导航',
            type: 'nav',
          },
          {
            label: '素材',
            type: 'material',
          }]
        },
        {
          label: '内容',
          type: 'content',
          children: [{
            label: '任务',
            type: 'task',
          },
          {
            label: '专访',
            type: 'interview',
          }]
        },
        {
          label: '其他',
          type: 'other',
          children: [{
            label: '企业',
            type: 'company',
          },
          {
            label: '十佳',
            type: 'best',
          }]
        }
      ]
    }
  ];

const NavHorizontal = () => {
    return (
        <div className="nav-horizontal-container">
            <List
                grid={{
                gutter: 10,
                column: 6,
                }}
                dataSource={data}
                renderItem={(items) => (
                <List.Item>
                    <div className="link-nav">
                        {
                          items.title !== '···' ? <Link target="_blank" to="/register" className='link-a-color'>{items.title}</Link> : <span className='link-a-color no-hover'>{items.title}</span>
                        }
                        {items.children ? <NavListChild childData={items.children} title={items.title}/> : ''}
                    </div>
                </List.Item>
                )}
            />
        </div>
    )
}

export default NavHorizontal