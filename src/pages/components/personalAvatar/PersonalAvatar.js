import './PersonalAvatar.less'
import { Avatar } from 'antd'
import avatarPic from '@/assets/imgs/avatarPic.png'

const PersonalAvatar = () => {
  return <Avatar className="avatar-img-personal" src={avatarPic} />
}

export default PersonalAvatar
