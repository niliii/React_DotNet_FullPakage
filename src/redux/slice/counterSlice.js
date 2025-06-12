import { createSlice } from "@reduxjs/toolkit";

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
      state.count = action.payload;
    },
    incrementMultiplier: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const {
  increment,
  decrement,
  decrementMultiplier,
  incrementMultiplier,
} = counterSlice.actions;
export const conterReducer = counterSlice.reducer;
