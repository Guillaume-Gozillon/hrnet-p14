import { configureStore } from '@reduxjs/toolkit'
import saveUserDataSlice from './saveUserDataSlice'
// import resetInputSlice from './resetInputSlice'
import updateStorage from './updateStorage'

export const store = configureStore({
  reducer: {
    save: saveUserDataSlice,
    whenOpen: updateStorage
  }
})
