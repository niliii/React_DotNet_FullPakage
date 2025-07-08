import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationlice";
import { resetReduxOPedia } from "../action/action";

const initalState = { count: 5 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initalState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decrementMultiplier: (state, action) => {
      state.count -= action.payload;
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    // resetCounter: (state) => {
    //   state.count = 10;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia, (state, action) => {
      state.count = 10;
    });
  },
});
export const {
  increment,
  decrement,
  decrementMultiplier,
  incrementMultiplier,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
