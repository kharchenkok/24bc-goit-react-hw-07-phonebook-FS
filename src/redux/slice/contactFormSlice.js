import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number: "",
};

const contactFormSlice = createSlice({
  name: "formContact",
  initialState,
  reducers: {
    getContactFormValue(state, action) {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    },
    clearForm(state, action) {
      return initialState;
    },
  },
});

const {actions,reducer} = contactFormSlice
export const{getContactFormValue,clearForm}=actions

export default reducer

// import { CLEAR_FORM, GET_FORM_VALUE } from "../constant";

// const initialState = {
//   name: "",
//   number: "",
// };

// const contactFormReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case GET_FORM_VALUE:
//       return { ...state, [payload.name]: payload.value };
//     case CLEAR_FORM:
//       return initialState;

//     default:
//       return state;
//   }
// };

// export default contactFormReducer;

// import { CLEAR_FORM, GET_FORM_VALUE } from "../constant";

// export const getContactFormValue = ({ name, value }) => ({
//   type: GET_FORM_VALUE,
//   payload: { name, value },
// });

// export const clearForm = () => ({
//   type: CLEAR_FORM,
// });
