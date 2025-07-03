import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/action";


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
        fact: "my love",
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
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia, (state, action) => {
      state.destinationSelected = null;
    });
  },
});
export const { destinationClicked, resetDestination } =
  destinationSlice.actions;
export const destinationsReducer = destinationSlice.reducer;

// console.log(destinationSlice.actions.resetDestination.toString())