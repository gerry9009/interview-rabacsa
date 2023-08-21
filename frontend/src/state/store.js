import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "./reducers/productsReducer";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: [thunk],
});
