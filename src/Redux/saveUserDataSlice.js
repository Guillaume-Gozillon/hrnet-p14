import { createSlice } from '@reduxjs/toolkit'

const initialState = { user : {
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
    },
    reset: state => {
      state.firstName = '',
      state.lastName = '',
      state.birthDate = null,
      state.startDate = null,
      state.street = '',
      state.city = '',
      state.usaState = '',
      state.zipcode = '',
      state.departmentState = ''
    }
  }
})

export const { save, reset } = saveUserDataSlice.actions
export default saveUserDataSlice.reducer
