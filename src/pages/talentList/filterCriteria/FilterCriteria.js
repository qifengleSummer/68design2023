import './FilterCriteria.less'
import FilterIndustry from './filterItem/FilterIndustry'
// import FilterType from './filterItem/FilterType'
import FilterWorkType from './filterItem/FilterWorkType'
import FilterOther from './filterItem/FilterOther'

const FilterCriteria = () => {
  return (
    <div className="filter-criteria-container border-E7">
      <FilterIndustry />
      {/* <FilterType /> */}
      <FilterWorkType />
      <FilterOther />
    </div>
  )
}

export default FilterCriteria
