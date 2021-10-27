import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  lastName: '',
  birthDate: '',
  startDate: ''
}

export const saveIntoLocalStorageSlice = createSlice({
  name: 'saveIntoLocalStorage',
  initialState,
  reducers: {
    save: (state, action) => {
      state.firstName = action.payload.firstName,
      state.lastName = action.payload.lastName,
      state.birthDate = action.payload.birthDateStringify,
      state.startDate = action.payload.startDate
      localStorage.setItem('data', state.firstName)
    }
  }
})

export const { save } = saveIntoLocalStorageSlice.actions
export default saveIntoLocalStorageSlice.reducer
