import './Footer.less'
import { Link } from 'react-router-dom'
import {
  SafetyCertificateOutlined,
  AccountBookOutlined,
  UserOutlined,
  LaptopOutlined,
  CrownOutlined,
  PartitionOutlined,
} from '@ant-design/icons'
const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="do_point">
        <li>
          <SafetyCertificateOutlined />
          <b>全程担保交易</b>
        </li>
        <li>
          <AccountBookOutlined />
          <b>验收满意再付款</b>
        </li>
        <li>
          <UserOutlined />
          <b>服务方全实名</b>
        </li>
        <li>
          <LaptopOutlined />
          <b>远程办公系统</b>
        </li>
        <li>
          <CrownOutlined />
          <b>独创晋级体系</b>
        </li>
        <li>
          <PartitionOutlined />
          <b>专注设计雇佣15年</b>
        </li>
      </ul>
      <div className="contact-68 do_cells">
        <div>
          <p className="g_c7">关于</p>
          <ul>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                关于我们
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                产品更新
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                服务协议
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                联系我们
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                接单群
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                移动版
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="g_c7">帮助</p>
          <ul>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                我是雇主
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                高效找人
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                包月雇佣
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                包月试用
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                我是服务费
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                如何接单
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                升级团队
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="g_c7">行业</p>
          <ul>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                品牌设计师
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                网站设计师
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                电商设计师
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                UI设计师
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                插画师
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                摄影师
              </Link>
            </li>
            <li>
              <Link className="do_cells-link" to="https://beian.miit.gov.cn/#/Integrated/index">
                室内设计师
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="ICP-information">
        <p className="ICP-copyright">Copyright © 2003-2023 design.net, All Rights Reserved</p>
        <span>
          <Link
            className="ICP-link"
            to="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34010402700146"
          >
            皖公安网备34010402700146号
          </Link>
        </span>
        <span>
          <Link className="ICP-link" to="https://beian.miit.gov.cn/#/Integrated/index">
            皖ICP备05012247号-3
          </Link>
        </span>
      </div>
      <div className="new-Links-container">
        <span className="new-Links-text">友情链接:</span>
        <ul className="new-Links">
          <li>
            <Link>找设计师</Link>
          </li>
          <li>
            <Link>线上设计师</Link>
          </li>
          <li>
            <Link>网站设计师</Link>
          </li>
          <li>
            <Link>超级导航</Link>
          </li>
          <li>
            <Link>UI中国</Link>
          </li>
          <li>
            <Link>中国设计网</Link>
          </li>
          <li>
            <Link>找设计师</Link>
          </li>
          <li>
            <Link>线上设计师</Link>
          </li>
          <li>
            <Link>网站设计师</Link>
          </li>
          <li>
            <Link>超级导航</Link>
          </li>
          <li>
            <Link>UI中国</Link>
          </li>
          <li>
            <Link>中国设计网</Link>
          </li>
          <li>
            <Link>找设计师</Link>
          </li>
          <li>
            <Link>线上设计师</Link>
          </li>
          <li>
            <Link>网站设计师</Link>
          </li>
          <li>
            <Link>超级导航</Link>
          </li>
          <li>
            <Link>UI中国</Link>
          </li>
          <li>
            <Link>中国设计网</Link>
          </li>
          <li>
            <Link>线上设计师</Link>
          </li>
          <li>
            <Link>网站设计师</Link>
          </li>
          <li>
            <Link>超级导航</Link>
          </li>
          <li>
            <Link>UI中国</Link>
          </li>
          <li>
            <Link>中国设计网</Link>
          </li>
          <li>
            <Link>线上设计师</Link>
          </li>
          <li>
            <Link>网站设计师</Link>
          </li>
          <li>
            <Link>超级导航</Link>
          </li>
          <li>
            <Link>UI中国</Link>
          </li>
          <li>
            <Link>中国设计网</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
