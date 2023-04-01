import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit' // import { apiGet } from '@/service/reqMethod'
import { apiGet } from '@/service/reqMethod.js'

export const STORE_RESET = 'workCollection/reset'
export const storeReset = createAction(STORE_RESET)

export const WORK_COLLECTION_PAGE_NUM = 'workCollection/pageNum'
export const collectionPageNum = createAction(WORK_COLLECTION_PAGE_NUM)

export const WORK_COLLECTION_CATEGORY = 'workCollection/category'
export const collectionCategory = createAction(WORK_COLLECTION_CATEGORY)

export const WORK_COLLECTION_NEW_WORK = 'workCollection/newWork'
export const collectionNewWork = createAction(WORK_COLLECTION_NEW_WORK)

export const WORK_COLLECTION_JUDGE = 'workCollection/judge'
export const collectionJudge = createAction(WORK_COLLECTION_JUDGE)

export const getWorkCollectionList = createAsyncThunk(
  'todos/getWorkCollectionList',
  async (dispatch, getState) => {
    let { pageNum, category, newWork, judge } = getState.getState().workCollectionList

    let params = {
      pageNum: pageNum,
      category: category,
      newWork: newWork,
      judge: judge,
    }
    const response = await apiGet({ url: '/apiWorkCollectionList', params })
    return response.data
  }
)

const initialState = {
  isLoading: false,
  pageNum: 1,
  category: '',
  newWork: '',
  judge: '',
}

const workCollectionSlice = createReducer(initialState, (builder) => {
  builder.addCase(storeReset, () => {
    // 重置store状态
    return initialState
  })
  builder.addCase(collectionCategory, (state, action) => {
    state.category = action.payload
  })
  builder.addCase(collectionNewWork, (state, action) => {
    state.newWork = action.payload
  })
  builder.addCase(collectionJudge, (state, action) => {
    state.judge = action.payload
  })
  builder.addCase(collectionPageNum, (state, action) => {
    state.pageNum = action.payload
  })
  builder.addCase(getWorkCollectionList.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(getWorkCollectionList.fulfilled, (state) => {
    state.isLoading = false
  })
  builder.addCase(getWorkCollectionList.rejected, (state) => {
    state.isLoading = false
  })
})
export default workCollectionSlice
