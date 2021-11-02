import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  lastName: '',
  birthDate: '',
  startDate: ''
}

const userRedux = []

export const saveUserDataSlice = createSlice({
  name: 'saveUserDataSlice',
  initialState,
  reducers: {
    save: (state, action) => {
      state.firstName = action.payload.firstName,
      state.lastName = action.payload.lastName,
      state.birthDate = action.payload.birthDate,
      state.startDate = action.payload.startDate,
      state.street = action.payload.street,
      state.city = action.payload.city,
      state.zipcode = action.payload.zipcode

      const { firstName, lastName, birthDate, startDate } = state
      userRedux.push({
        firstName,
        lastName,
        birthDate,
        startDate,
        street,
        city,
        zipcode
      })

      localStorage.setItem('userData', JSON.stringify(userRedux))
    }
  }
})

export const { save } = saveUserDataSlice.actions
export default saveUserDataSlice.reducer
