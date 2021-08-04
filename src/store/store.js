import { configureStore } from '@reduxjs/toolkit'
import restaurants from './restaurantSlice';

export default configureStore({
  reducer: { restaurants },
})