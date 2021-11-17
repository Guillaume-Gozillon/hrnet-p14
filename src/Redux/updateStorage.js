import { createSlice } from '@reduxjs/toolkit'
import { findAllByDisplayValue } from '@testing-library/react'

const initialState = {
  storageState: { toUpdate: false }
}

export const updateStorage = createSlice({
  name: 'updateStorage',
  initialState,
  reducers: {
    whenOpen: state => !state.toUpdate,
    whenClose: state => state.toUpdate = false
  }
})

export const { whenOpen, whenClose } = updateStorage.actions
export default updateStorage.reducer
