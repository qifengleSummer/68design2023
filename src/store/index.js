import { configureStore } from '@reduxjs/toolkit'
import talentListSlice from './talentListSlice'
import workCollectionSlice from './workCollectionSlice'
import registerSlice from './registerSlice'
import loginStatusSlice from './loginStatusSlice'

export const store = configureStore({
  reducer: {
    talentList: talentListSlice,
    workCollectionList: workCollectionSlice,
    registerUserData: registerSlice,
    loginStatusSlice: loginStatusSlice,
  },
})
