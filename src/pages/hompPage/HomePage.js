import './HomePage.less';
import logo from "../../assets/imgs/logo.svg";
import { useNavigate } from 'react-router-dom';
import { Col, Row, Button, Space } from 'antd';

import LeftBar from "./components/leftBar/LeftBar";
import NavSearch from "./components/navSearch/NavSearch";
import NavHorizontal from "./components/navHorizontal/NavHorizontal";


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
                            <Button className='register-btn' onClick={() => navigate("/register")}>注册</Button>
                        </Space>
                    </Col>
                </Row>
            </header>

            <section className="home-body">
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
                <div>
                中国国际经济交流中心副理事长、国际货币基金组织原副总裁 朱民：做贸易融资是很普遍的一件事，有买方信贷，有卖方信贷，但在沙特就比较有意思：

　　第一沙特很有钱，所以通常也很难想到沙特需要贷款来做贸易；

　　第二用人民币，这很重要，我们是在用人民币来支持合作；

　　第三人民币的后面是一个全面合作，我们以前跟沙特合作比较多的都是能源、买油等等，但是去年年底中沙两国元首签订战略合作34个大项目，包括氢能、光伏、5G、科技，这就远远超过我们进口石油的范围，包括中国制造业，中国科技产品走向世界。在这个情况下把人民币放进去，通过人民币来推动中国更多的制造业科技产品走向世界，因为人民币提供了便利性，提供了低成本，提供了低风险，来结合中国的实体经济走向世界，而且这是我们第一次在中东有这样的业务，所以这件事的意义还是很大的。

　　　　沙特为什么会选择人民币？
                    
                </div>
            </section>
        </div>

    )
}

export default Index