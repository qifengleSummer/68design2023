import './CommonButton.less'
import { Button } from 'antd'

const CommonButton = ({
  title,
  size = 'middle',
  padNumber = 20,
  emphasize,
  fontEmphasize,
  fontSize = 14,
  btnClicked,
}) => {
  const commonBtnClicked = () => {
    btnClicked()
  }
  return (
    <div className="common-button-container">
      <Button
        className={['common-button', emphasize ? 'emphasize-btn' : ''].join(' ')}
        size={size}
        style={{
          paddingLeft: `${padNumber}px`,
          paddingRight: `${padNumber}px`,
          fontWeight: `${fontEmphasize ? 'bold' : ''}`,
          fontSize: `${fontSize}px`,
        }}
        onClick={commonBtnClicked}
      >
        {title}
      </Button>
    </div>
  )
}

export default CommonButton
