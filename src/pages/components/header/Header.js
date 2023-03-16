import './Header.less'
import logo from "../../../assets/imgs/logo.svg";
import { useNavigate } from 'react-router-dom';
import { Col, Row, Button, Space } from 'antd';

import NavSearch from "../../hompPage/components/navSearch/NavSearch";
import NavHorizontal from "../../hompPage/components/navHorizontal/NavHorizontal";
import LeftBar from "../../hompPage/components/leftBar/LeftBar";

function TopHeader () {
    const navigate = useNavigate()
    return (
        <div className='top-header-container'>
            <header >
                <Row className='header-container'>
                    <Col span={12} className="left--top-bar">
                        <LeftBar />
                    </Col>
                    <Col span={12} className="right-btn">
                        <Space>
                            <Button>雇主控制台</Button>
                            <Button onClick={() => navigate("/login")}>登录</Button>
                            <Button className='register-btn' onClick={() => navigate("/register")}>注册</Button>
                        </Space>
                    </Col>
                </Row>
            </header>
            
            <Row className='nav-bar'>
                <Col span={4}>
                    <img className='logo-img' src={logo} alt="" />
                </Col>
                <Col span={9}>
                    <NavHorizontal />
                </Col>
                <Col span={5}></Col>
                <Col span={6}>
                    <NavSearch />
                </Col>
            </Row>
        </div>
    )
}

export default TopHeader