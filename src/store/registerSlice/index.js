import { createAction, createReducer, createEntityAdapter } from '@reduxjs/toolkit'
export const STORE_REGISTER = 'store/register'
export const storeRegister = createAction(STORE_REGISTER)

export const DataAdapter = createEntityAdapter()

export const { selectById: adapterLoginId, selectEntities: adapterLoginEntities } =
  DataAdapter.getSelectors((state) => state.registerUserData)

// const registerList = {
//   ids: [],
//   entities: {
//     first: {
//       name: '',
//       pwd: '',
//     },
//   },
// }

const registerSlice = createReducer(
  // DataAdapter.getInitialState(registerList),
  DataAdapter.getInitialState(),
  (builder) => {
    builder.addCase(storeRegister, (state, action) => {
      DataAdapter.upsertOne(state, action.payload)
    })
  }
)

export default registerSlice
