import './DesignerDetailInfo.less'
import PersonalAvatar from '@/pages/components/personalAvatar/PersonalAvatar'
import picPic1 from '@/assets/imgs/homePage/pic-1.jpg'
import picPic2 from '@/assets/imgs/homePage/pic-2.jpg'
import picPic3 from '@/assets/imgs/homePage/pic-3.jpg'
import CommonButton from '@/pages/components/commonButton/CommonButton'

const DesignerDetailInfo = ({ designerInfo }) => {
  const btnClicked = () => {}
  return (
    <div className="designer-detail-dialog">
      <div className="designer-relation-info">
        <div className="avatar-name">
          <PersonalAvatar size="50" />
          <div>
            <p>
              <b className="designer-dialog-name">{designerInfo.author}</b>
            </p>
            <p className="designer-address">{`${designerInfo.province} ${designerInfo.area}`}</p>
          </div>
        </div>
        <div className="pay-attention">
          <CommonButton btnClicked={btnClicked} title="加关注" size="middle" emphasize />
        </div>
      </div>
      <ul className="designer-works-exams">
        <li className="designer-works-exams-li">
          <img className="designer-works-img" src={picPic1} alt="" />
        </li>
        <li className="designer-works-exams-li">
          <img className="designer-works-img" src={picPic2} alt="" />
        </li>
        <li className="designer-works-exams-li">
          <img className="designer-works-img" src={picPic3} alt="" />
        </li>
      </ul>
      <div className="designer-influence-force">
        <span className="influence-force-item influence-force-text">影响力</span>
        <span className="influence-force-item">全国 {designerInfo.influence}</span>
        <span className="influence-force-item">广东 {designerInfo.areaInfluence}</span>
      </div>
    </div>
  )
}
export default DesignerDetailInfo
