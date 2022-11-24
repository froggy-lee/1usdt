import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '/src/store/slice/modal'

export const store = configureStore({
  reducer: {
    modal: modalReducer
  }
})
