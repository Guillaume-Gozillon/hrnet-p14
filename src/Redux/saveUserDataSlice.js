import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  lastName: '',
  birthDate: null,
  startDate: null,
  street: '',
  city: '',
  usaState: '',
  zipcode:'',
  departmentState:''
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
      state.usaState = action.payload.usaState,
      state.zipcode = action.payload.zipcode,
      state.departmentState = action.payload.departmentState

      const { 
        firstName,
        lastName,
        birthDate,
        startDate,
        street,
        city,
        usaState,
        zipcode,
        departmentState
      } = state

      userRedux.push({
        firstName,
        lastName,
        birthDate,
        startDate,
        street,
        city,
        usaState,
        zipcode,
        departmentState
      })

      localStorage.setItem('userData', JSON.stringify(userRedux))
    }
  }
})

export const { save } = saveUserDataSlice.actions
export default saveUserDataSlice.reducer
