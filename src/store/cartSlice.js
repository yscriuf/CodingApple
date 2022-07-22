import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({ 
  name : 'cart',
  initialState : 
  [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    changeCount(state, action){
      state[action.payload].count++;
    }
  }
})

export let { changeCount } = cart.actions

export default cart