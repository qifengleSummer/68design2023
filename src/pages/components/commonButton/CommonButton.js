import './CommonButton.less'
import { Button } from 'antd'

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
}) => {
  const commonBtnClicked = () => {
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
        {title}
      </Button>
    </div>
  )
}

export default CommonButton
