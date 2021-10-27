import { configureStore } from '@reduxjs/toolkit'
import saveIntoLocalStorageSlice from './saveIntoLocalStorageSlice'

export const store = configureStore({
  reducer: {
    save: saveIntoLocalStorageSlice
  }
})
