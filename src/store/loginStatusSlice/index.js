import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import { apiPost } from '@/service/reqMethod.js'

export const SHOW_LOGIN_MODAL = 'store/showLoginModal'
export const showLoginModal = createAction(SHOW_LOGIN_MODAL)
export const API_CHECK_LOGIN = 'store/apishowLoginModal'
export const apishowLoginModal = createAction(API_CHECK_LOGIN)

export const reqCheckLogin = createAsyncThunk(apishowLoginModal, async (dispatch, getState) => {
  let params = {
    userName: localStorage.getItem('userName'),
  }
  try {
    const response = await apiPost({ url: '/checkLogin', params })
    return response.data
  } catch (error) {
    console.log(error)
  }
})

const loginStatusSlice = createReducer({ isLoggedIn: false }, (builder) => {
  builder.addCase(showLoginModal, (state, action) => {
    state.isLoggedIn = action.payload
  })
})

export default loginStatusSlice
