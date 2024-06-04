import { configureStore } from '@reduxjs/toolkit'
import hotels from './store.slice'

export default configureStore({
  reducer:{
    hotels
  }
})

