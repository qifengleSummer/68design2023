import { configureStore } from '@reduxjs/toolkit'
import talentListSlice from './talentListSlice'

export const store = configureStore({
  reducer: {
    talentList: talentListSlice,
  },
})
