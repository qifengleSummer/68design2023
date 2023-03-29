import { configureStore } from '@reduxjs/toolkit'
import talentListSlice from './talentListSlice'
import workCollectionSlice from './workCollectionSlice'

export const store = configureStore({
  reducer: {
    talentList: talentListSlice,
    workCollectionList: workCollectionSlice,
  },
})
