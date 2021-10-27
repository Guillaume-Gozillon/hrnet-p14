import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
  }

export const saveIntoLocalStorageSlice = createSlice({
    name: 'saveIntoLocalStorage',
    initialState,
    reducers: {
        save: state => {
            localStorage.setItem('Test', state.value)
        }
    }
})

export const { save }