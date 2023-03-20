import Icon from '@ant-design/icons'
const ThumbSvg = () => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    fill="currentColor"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M982.016 425.984l-2.005333 4.010667 2.005333 0 0 82.005333q0 16-6.016 32l-130.005333 299.989333q-20.010667 52.010667-77.994667 52.010667l-384 0q-34.005333 0-59.989333-25.984t-25.984-59.989333l0-425.984q0-34.005333 25.984-59.989333l280.021333-281.984 45.994667 45.994667q18.005333 18.005333 18.005333 43.989333l0 13.994667-41.984 196.010667 269.994667 0q34.005333 0 59.989333 25.002667t25.984 59.008zM41.984 896l0-512 171.989333 0 0 512-171.989333 0z"></path>
  </svg>
)
const ThumbUpEle = (props) => <Icon component={ThumbSvg} {...props} />
export default ThumbUpEle
