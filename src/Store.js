import { configureStore } from '@reduxjs/toolkit'
import logsReducer from './logSlice'

export default configureStore({
  reducer: {
    logBag: logsReducer,
  },
})