import './HomePage.less';
import { useNavigate, Link } from 'react-router-dom';
import { Col, Row, Button, Space, List, Input } from 'antd';
import { SearchOutlined, CaretDownOutlined } from '@ant-design/icons';
import LeftBar from "./components/leftBar/LeftBar";
import logo from "../../assets/imgs/logo.svg";

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
            title: '品牌设计'
        },
        {
            title: '网站设计'
        },
      ]
    },
    {
      title: '案例',
    },
    {
      title: '···'
    }
  ];

const Index = () => {
    const navigate = useNavigate()
    return (
        <div className='home-page-container'>
            <header >
                <Row className='header-container'>
                    <Col span={12} className="left--top-bar">
                        <LeftBar />
                    </Col>
                    <Col span={12} className="right-btn">
                        <Space>
                            <Button>雇主控制台</Button>
                            <Button onClick={() => navigate("/login")}>登录</Button>
                            <Button onClick={() => navigate("/register")}>注册</Button>
                        </Space>
                    </Col>
                </Row>
            </header>

            <section className="home-body">
                <Row className='nav-bar'>
                    <Col span={4}>
                        <img className='logo-img' src={logo} alt="" />
                    </Col>
                    <Col span={12}>
                        <List
                            grid={{
                            gutter: 10,
                            column: 6,
                            }}
                            dataSource={data}
                            renderItem={(item) => (
                            <List.Item>
                                <Link> <b>{item.title}</b> </Link>
                            </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={2}></Col>
                    <Col span={6}>
                        <Input
                            className='nav-search'
                            placeholder="搜索"
                            prefix={<SearchOutlined />}
                            />
                    </Col>
                </Row>
            </section>
        </div>

    )
}

export default Index