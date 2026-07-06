// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { VENUE_CATALOG, BUSINESS_RULES } from "./config/constants";

export const venueSlice = createSlice({
  name: "venue",
  initialState: VENUE_CATALOG.map((v) => ({ ...v })),
  reducers: {
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === "Auditorium Hall (Capacity:200)" && state[index].quantity >= BUSINESS_RULES.maxAuditoriumQty) {
          return;
        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
