import { configureStore } from '@reduxjs/toolkit'
import saveUserDataSlice from './saveUserDataSlice'
// import resetInputSlice from './resetInputSlice'

export const store = configureStore({
  reducer: {
    save: saveUserDataSlice
  }
})