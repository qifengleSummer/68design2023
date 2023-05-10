import './CommonButton.less'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reqCheckLogin, SHOW_LOGIN_MODAL } from '@/store/loginStatusSlice/index.js'

const CommonButton = ({
  title,
  size = 'middle',
  padNumber = 20,
  emphasize,
  fontEmphasize,
  fontSize = 14,
  bgColor,
  color,
  btnClicked,
  setIcon,
  navUrl,
  needLoginStatus, // 该按钮点击后是否需要校验登录状态，未登录，则提示登录
}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const commonBtnClicked = async () => {
    if (needLoginStatus) {
      try {
        // 目前：接口写死未登录状态
        const res = await dispatch(reqCheckLogin()).unwrap() // 校验是否登录
        dispatch({ type: SHOW_LOGIN_MODAL, payload: !res.isLoggedIn })
        alert('已登录状态！')
      } catch (error) {
        dispatch({ type: SHOW_LOGIN_MODAL, payload: true }) // 提示登录
      }
    }
    if (navUrl) return navigate(navUrl)
    btnClicked()
  }
  let btnConfig = {
    paddingLeft: `${padNumber}px`,
    paddingRight: `${padNumber}px`,
    fontWeight: `${fontEmphasize ? 'bold' : ''}`,
    fontSize: `${fontSize}px`,
    backgroundColor: `${bgColor ? bgColor : ''}`,
    color: `${color ? color : ''}`,
  }
  return (
    <div className="common-button-container">
      <Button
        className={['common-button', emphasize ? 'emphasize-btn' : ''].join(' ')}
        size={size}
        style={btnConfig}
        onClick={commonBtnClicked}
      >
        <span className="common-button-icon">{setIcon}</span>
        {title}
      </Button>
    </div>
  )
}

export default CommonButton
