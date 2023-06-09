import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGet } from '@/service/reqMethod.js'

export const STORE_RESET = 'filter/reset'
export const storeReset = createAction(STORE_RESET)

export const FILTER_INDUSTRY_STORE = 'filter/IndustryStore'
export const filterIndustryAction = createAction(FILTER_INDUSTRY_STORE)

export const filterIndustrySecAction = createAction('filter/IndustrySecStore')

export const FILTER_WORK_TYPE_STORE = 'filter/WorkTypeStore'
export const filterWorkTypeAction = createAction(FILTER_WORK_TYPE_STORE)

export const filterOtherSortAction = createAction('filter/OtherSortStore')
export const filterOtherLevelAction = createAction('filter/OtherLevelStore')
export const filterOtherExperienceAction = createAction('filter/OtherExperienceStore')

export const FILTER_PAGE_NUM = 'filter/pageNum'
export const filterPageNum = createAction(FILTER_PAGE_NUM)

export const FETCH_TODOS = 'todos/fetchTodos'
export const fetchTodosAction = createAction(FETCH_TODOS)
export const fetchTodos = createAsyncThunk(fetchTodosAction, async (dispatch, getState) => {
  let { pageNum, filterIndustryStore, filterWorkTypeStore } = getState.getState().talentList
  let params = {
    pageNum: pageNum,
    industry: filterIndustryStore,
    WorkType: filterWorkTypeStore,
  }
  try {
    const response = await apiGet({ url: '/apiTalentList', params })
    return response.data
  } catch (error) {
    console.log(error)
  }
})

const initialState = {
  isLoading: false,
  pageNum: 1,
  filterIndustryStore: 0,
  filterIndustrySecStore: 0,
  filterWorkTypeStore: 0,
  filterOtherSortStore: 0,
  filterOtherLevelStore: 0,
  filterOtherExperienceStore: 0,
}

const talentListSlice = createReducer(initialState, (builder) => {
  builder.addCase(storeReset, () => {
    return initialState
  })
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
  builder.addCase(filterPageNum, (state, action) => {
    state.pageNum = action.payload
  })
  builder.addCase(fetchTodos.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(fetchTodos.fulfilled, (state) => {
    state.isLoading = false
  })
  builder.addCase(fetchTodos.rejected, (state) => {
    state.isLoading = false
  })
})
export default talentListSlice
