import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({ 
  name : 'user',
  initialState : { name : 'kim', age : 20 },
  reducers : {
    changeName(state){
      state.name = 'park'
    },
    increase(state, num){
      state.age += num.payload;
    }
  }
})

export let { changeName, increase } = user.actions

let cart = createSlice({ 
  name : 'cart',
  initialState : 
  [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    changeCount(state){
      console.log(state);
      return state;
    }
  }
})

export let { changeCount } = cart.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
}) 

//state 만들고 등록까지 완료.