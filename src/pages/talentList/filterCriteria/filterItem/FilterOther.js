import FilterOtherSelect from './FilterOtherSelect'
const FilterOther = () => {
  return (
    <div className="talent-filter">
      <span className="talent-filter-babel">其他</span>
      <ul className="talent-filter-select">
        <li>
          排序
          <FilterOtherSelect />
        </li>
        <li>
          级别
          <FilterOtherSelect />
        </li>
        <li>
          经验
          <FilterOtherSelect />
        </li>
      </ul>
    </div>
  )
}

export default FilterOther
