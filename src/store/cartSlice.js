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
    },
    removeItem(state, action){
      console.log(action.payload);
      let name = action.payload;
      let i = 0;
      for(var obj of state){
        if(obj.name == name){
          state.splice(i, 1);
          return;
        }
        i++;
      }
    },
  }
})

export let { changeCount, addItem, removeItem } = cart.actions

export default cart