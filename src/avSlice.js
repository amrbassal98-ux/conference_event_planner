import { createSlice } from "@reduxjs/toolkit";
import { AV_CATALOG } from "./config/constants";

export const avSlice = createSlice({
  name: "av",
  initialState: AV_CATALOG.map((a) => ({ ...a })),
  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
