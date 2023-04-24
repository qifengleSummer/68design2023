import { createAction, createReducer, createEntityAdapter } from '@reduxjs/toolkit'
export const STORE_LOGIN = 'store/login'
export const storeLogin = createAction(STORE_LOGIN)

export const DataAdapter = createEntityAdapter()

export const { selectById: adapterLoginId, selectEntities: adapterLoginEntities } =
  DataAdapter.getSelectors((state) => state.loginUserData)

// const loginInit = {
//   ids: [],
//   entities: {
//     first: {
//       name: '',
//       pwd: '',
//     },
//   },
// }

const loginSlice = createReducer(
  // DataAdapter.getInitialState(loginInit),
  DataAdapter.getInitialState(),
  (builder) => {
    builder.addCase(storeLogin, (state, action) => {
      DataAdapter.upsertOne(state, action.payload)
    })
  }
)

export default loginSlice
