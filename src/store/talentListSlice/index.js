import { createAction, createReducer } from '@reduxjs/toolkit'

export const FILTERINDUSTRYSTORE = 'filter/IndustryStore'
export const filterIndustryAction = createAction(FILTERINDUSTRYSTORE)

export const filterIndustrySecAction = createAction('filter/IndustrySecStore')

export const FILTERWORKTYPESTORE = 'filter/WorkTypeStore'
export const filterWorkTypeAction = createAction(FILTERWORKTYPESTORE)

export const filterOtherSortAction = createAction('filter/OtherSortStore')
export const filterOtherLevelAction = createAction('filter/OtherLevelStore')
export const filterOtherExperienceAction = createAction('filter/OtherExperienceStore')

const talentListSlice = createReducer(
  {
    filterIndustryStore: 0,
    filterIndustrySecStore: 0,
    filterWorkTypeStore: 0,
    filterOtherSortStore: 0,
    filterOtherLevelStore: 0,
    filterOtherExperienceStore: 0,
  },
  (builder) => {
    builder.addCase(filterIndustryAction, (state, action) => {
      state.filterIndustryStore = action.payload
    })
    builder.addCase(filterIndustrySecAction, (state, action) => {
      state.filterIndustrySecStore = action.payload
    })
    builder.addCase(filterWorkTypeAction, (state, action) => {
      state.filterWorkTypeStore = action.payload
    })
    builder.addCase(filterOtherSortAction, (state, action) => {
      state.filterOtherSortStore = action.payload
    })
    builder.addCase(filterOtherLevelAction, (state, action) => {
      state.filterOtherLevelStore = action.payload
    })
    builder.addCase(filterOtherExperienceAction, (state, action) => {
      state.filterOtherExperienceStore = action.payload
    })
  }
)
export default talentListSlice
