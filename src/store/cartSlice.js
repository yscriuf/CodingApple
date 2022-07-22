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
      let name = action.payload;
      for(var obj of state){
        if(obj.name == name){
          obj.count++;
          return;
        }
      }
    },
    addItem(state, action){
      console.log(action.payload);
      let [id, name] = action.payload;
      for(var obj of state){
        if(obj.name == name){
          obj.count++;
          return;
        }
      }
      state.push({id : id, name : name, count : 1});
    }
  }
})

export let { changeCount, addItem } = cart.actions

export default cart