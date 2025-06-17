import { createSlice } from "@reduxjs/toolkit";

const initalState = () => {
  return {
    destinations: [
      {
        name: "niloo",
        day: 5,
        fact: "llkdnclnlnclnc",
      },

      {
        name: "mohsen",
        day: 10,
        fact: "llkdnclnlnclnc",
      },
      {
        name: "nima",
        day: 2,
        fact: "llkdnclnlnclnc",
      },
    ],
    destinationSelected: null,
  };
};
export const destinationSlice = createSlice({
  name: "destinations",
  initialState: initalState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
    },
    resetDestination: (state, action) => {
      console.log(action);

      state.destinationSelected = null;
    },
  },
});
export const { destinationClicked, resetDestination } =
  destinationSlice.actions;
export const destinationsReducer = destinationSlice.reducer;
