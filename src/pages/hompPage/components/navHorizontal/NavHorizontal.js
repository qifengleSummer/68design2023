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
          key: '1',
        },
        {
          label: '网站设计',
          key: '2',
        },
        {
          label: '电商设计',
          key: '3'
        },
        {
          label: 'UI设计',
          key: '4'
        },
        {
          label: '插画',
          key: '5'
        },
        {
          label: '摄影',
          key: '6'
        },
        {
          label: '室内设计',
          key: '7'
        },
        {
          label: '工业设计',
          key: '8'
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
          label: '品牌设计',
          key: '0',
        },
        {
          label: '网站设计',
          key: '1',
        }
      ]
    }
  ];

const NavHorizontal = () => {
  console.log(9999999999999)
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
                        <Link target="_blank" to="/register" className='link-a-color'>{items.title}</Link>
                        {items.children ? <NavListChild childData={items.children}/> : ''}
                    </div>
                </List.Item>
                )}
            />
        </div>
    )
}

export default NavHorizontal