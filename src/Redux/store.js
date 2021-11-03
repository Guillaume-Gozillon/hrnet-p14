import { configureStore } from '@reduxjs/toolkit'
import saveUserDataSlice from './saveUserDataSlice'

export const store = configureStore({
  reducer: {
    save: saveUserDataSlice
  }
})
