
import { createSlice } from "@reduxjs/toolkit";
const initialState=false

const loaderSlice=createSlice({
    name:"loader",
    initialState,
    reducers:{
        loaderOn(state, {payload}){
            return true
        },
        loaderOff(state, {payload}){
            return false
        }
    }
})

const { actions, reducer } = loaderSlice;
export const { loaderOn,loaderOff } = actions;

export default reducer;

// import { LOADER_OFF, LOADER_ON } from "../constant";

// export const loaderOn = () => ({
//   type: LOADER_ON,

// });
// export const loaderOff = () => ({
//   type: LOADER_OFF,

// });
// import { LOADER_OFF, LOADER_ON } from "../constant";

// const initiallState = false;
// const loaderReducer= (state = initiallState, action) => {
//   switch (action.type) {
//     case LOADER_ON:
//       return true;
//     case LOADER_OFF:
//       return false;

//     default:
//       return state;
//   }
// };

// export default loaderReducer