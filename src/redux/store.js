import { configureStore } from "@reduxjs/toolkit";
import Counter from "../Counter";
import { counterReducer } from "./slice/counterSlice";
import { destinationsReducer } from "./slice/destinationSlice";
import {
  increment,
  decrement,
  decrementMultiplier,
  incrementMultiplier,
} from "./slice/counterSlice";
import { destinationClicked, resetDestination } from "./slice/destinationSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    destinationStore: destinationsReducer,
  },
});
console.log(store.getState());

export {
  destinationClicked,
  resetDestination,
  increment,
  decrement,
  decrementMultiplier,
  incrementMultiplier,
};
