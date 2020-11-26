import { createSlice } from "@reduxjs/toolkit";
const initialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getFilterValue(state, action) {
        // console.log('getFilterValue', action.payload.target.value.toLowerCase());
        const {target}=action.payload
      return target.value.toLowerCase()
    },
  },
});

const { actions, reducer } = filterSlice;
export const { getFilterValue } = actions;

export default reducer;

