import {configureStore} from "@reduxjs/toolkit"
import Counter from "../Counter"
import { conterReducer } from "./slice/counterSlice"

export const store=configureStore({
      reducer: {
            counter:conterReducer
      },

    
})
console.log(store.getState());
store.dispatch({
      type:"counter/increment"
});
console.log(store.getState());
