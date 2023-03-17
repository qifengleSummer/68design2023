import './Header.less'
import logo from '../../../assets/imgs/logo.svg'
import { useNavigate } from 'react-router-dom'
import { Col, Row, Space } from 'antd'

import NavSearch from '../navSearch/NavSearch'
import NavHorizontal from '../navHorizontal/NavHorizontal'
import LeftBar from '../leftBar/LeftBar'
import CommonButton from '../commonButton/CommonButton'

function TopHeader() {
  const navigate = useNavigate()
  const btnClicked = (type) => {
    switch (type) {
      case 2:
        navigate('/login')
        break
      case 3:
        navigate('/register')
        break
      default:
        break
    }
  }
  return (
    <div className="top-header-container">
      <header>
        <Row className="header-container">
          <Col span={12} className="left--top-bar">
            <LeftBar />
          </Col>
          <Col span={12} className="right-btn">
            <Space>
              <CommonButton btnClicked={() => btnClicked(1)} title="雇主控制台" />
              <CommonButton btnClicked={() => btnClicked(2)} title="登录" />
              <CommonButton btnClicked={() => btnClicked(3)} title="注册" emphasize />
            </Space>
          </Col>
        </Row>
      </header>

      <Row className="nav-bar">
        <Col span={4}>
          <img className="logo-img" src={logo} alt="" />
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
