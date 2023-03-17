import './SearchIcon.less'
import { SearchOutlined, CaretDownOutlined } from '@ant-design/icons'

const SearchIcon = (props) => {
  return (
    <div>
      <SearchOutlined />
      <CaretDownOutlined
        className={['search-arrow-icon', props.stateFocus ? 'focus-arraw' : ''].join(' ')}
      />
    </div>
  )
}

export default SearchIcon
