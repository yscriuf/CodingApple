import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({ 
  name : 'cart',
  initialState : 
  [
    {id : 0, name : 'White and Black', count : 2},
    {id : 1, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    changeCount(state, action){
      state[action.payload].count++;
    },
    addItem(state, action){
      console.log(action.payload);
      for(let key in state){
        if(state[key].name == action.payload){
          state[key].count++;
          console.log(state[key].count);
        }
      }
      // state.push({id : 0, name : action.payload, count : 1});
    }
  }
})

export let { changeCount, addItem } = cart.actions

export default cart