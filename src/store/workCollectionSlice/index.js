import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGet } from '@/service/reqMethod'

export const WORK_COLLECTION_PAGE_NUM = 'filter/pageNum'
export const collectionPageNum = createAction(WORK_COLLECTION_PAGE_NUM)

export const getWorkCollectionList = createAsyncThunk(
  'todos/getWorkCollectionList',
  async (dispatch, getState) => {
    let { pageNum } = getState.getState().workCollectionList

    let params = {
      pageNum: pageNum,
    }
    const response = await apiGet('/apiWorkCollectionList', {
      ...params,
    })
    return response
  }
)

const workCollectionSlice = createReducer(
  {
    isLoading: false,
    pageNum: 1,
  },
  (builder) => {
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
  }
)
export default workCollectionSlice
