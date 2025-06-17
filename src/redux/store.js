import {configureStore} from "@reduxjs/toolkit"
import Counter from "../Counter"
import { counterReducer } from "./slice/counterSlice"
import { destinationsReducer } from "./slice/destinationSlice"

export const store=configureStore({
      reducer: {
            counter:counterReducer,
            destinationStore:destinationsReducer
      },

    
})
 console.log(store.getState());
// store.dispatch({
//       type:"counter/increment"
// });
// console.log(store.getState());
