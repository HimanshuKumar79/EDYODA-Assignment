import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "179",
};

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    changePlan: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePlan } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
