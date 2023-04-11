import './Header.less'
import logo from '@/assets/imgs/logo.JPG'
import { Link } from 'react-router-dom'
import { Col, Row, Space } from 'antd'
import { useEffect, useState } from 'react'
import NavSearch from '../navSearch/NavSearch'
import NavHorizontal from '../navHorizontal/NavHorizontal'
import LeftBar from '../leftBar/LeftBar'
import CommonButton from '../commonButton/CommonButton'

function TopHeader() {
  const [suctionCeiling, setSuctionCeiling] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
    return window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    let y = document.documentElement.scrollTop
    if (y > 50) return setSuctionCeiling(true)
    return setSuctionCeiling(false)
  }

  return (
    <div
      className={['top-header-container', suctionCeiling ? 'top-header-container-shadow' : ''].join(
        ' '
      )}
    >
      <header>
        <Row className="header-container">
          <Col span={12} className="left--top-bar">
            <LeftBar />
          </Col>
          <Col span={12} className="right-btn">
            <Space>
              <CommonButton title="雇主控制台" />
              <CommonButton navUrl="/login" title="登录" />
              <CommonButton navUrl="/register" title="注册" emphasize />
            </Space>
          </Col>
        </Row>
      </header>

      <Row className="nav-bar">
        <Col span={4}>
          <Link to="/">
            <img className="logo-img" src={logo} alt="" />
          </Link>
        </Col>
        <Col span={9}>
          <NavHorizontal />
        </Col>
        <Col span={6} offset={5}>
          <NavSearch />
        </Col>
      </Row>
    </div>
  )
}

export default TopHeader
