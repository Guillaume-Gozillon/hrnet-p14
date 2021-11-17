import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  storageState: { toUpdate: false }
}

export const updateStorage = createSlice({
  name: 'updateStorage',
  initialState,
  reducers: {
    whenOpen: (state, action) => {
      state.toUpdate = action.payload
    }
  }
})

export const { whenOpen } = updateStorage.actions
export default updateStorage.reducer
