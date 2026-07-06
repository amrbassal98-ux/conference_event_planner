// mealsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { MEAL_CATALOG } from "./config/constants";

export const mealsSlice = createSlice({
  name: "meals",
  initialState: MEAL_CATALOG.map((m) => ({ ...m })),
  reducers: {
    toggleMealSelection: (state, action) => {
      const selection = state[action.payload];
      selection.selected = !selection.selected;
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
