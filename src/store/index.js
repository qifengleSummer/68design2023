import { configureStore } from '@reduxjs/toolkit'
import talentListSlice from './talentListSlice'
import workCollectionSlice from './workCollectionSlice'
import loginSlice from './loginSlice'

export const store = configureStore({
  reducer: {
    talentList: talentListSlice,
    workCollectionList: workCollectionSlice,
    loginUserData: loginSlice,
  },
})
