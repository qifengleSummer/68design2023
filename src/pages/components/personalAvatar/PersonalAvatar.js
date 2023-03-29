import './PersonalAvatar.less'
import { Avatar } from 'antd'
import avatarPic from '@/assets/imgs/avatarPic.png'

const PersonalAvatar = ({ size = 100 }) => {
  return (
    <Avatar
      className="avatar-img-personal"
      src={avatarPic}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  )
}

export default PersonalAvatar
