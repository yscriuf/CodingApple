import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({ 
  name : 'user',
  initialState : 'kim'
})

let stock = createSlice({ 
  name : 'stock',
  initialState : [10, 11, 12]
})

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer
  }
}) 

//state 만들고 등록까지 완료.