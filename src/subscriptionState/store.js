import { configureStore } from "@reduxjs/toolkit";
import subscriptionSlice from "./slice/subscriptionSlice";
export const store = configureStore({
  reducer: {
    subscription: subscriptionSlice,
  },
});
