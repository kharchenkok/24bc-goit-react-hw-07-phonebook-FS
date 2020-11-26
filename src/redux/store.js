import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./slice/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
