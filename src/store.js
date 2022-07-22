import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'
import cart from './store/cartSlice.js'


export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
}) 

//state 만들고 등록까지 완료.