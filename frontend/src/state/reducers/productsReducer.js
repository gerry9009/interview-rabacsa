import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  product: [],
  categories: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    // get products list and order it
  },
  extraReducers: {},
});

export const fetchProducts = createAsyncThunk(
  "get_items",
  async (_, { getState, dispatch }) => {
    axios.get("http://localhost:8088/api/").then((res) => {
      const data = res.data.products;

      dispatch(productsSlice.actions.setProducts(data));
    });
  }
);

export const fetchProduct = createAsyncThunk(
  "get_items",
  async (id, { getState, dispatch }) => {
    axios.get(`http://localhost:8088/api/${id}`).then((res) => {
      const data = res.data;
      console.log(data);
      dispatch(productsSlice.actions.setProduct(data));
    });
  }
);

export const fetchCategories = createAsyncThunk(
  "get_categories",
  async (_, { getState, dispatch }) => {
    axios.get("http://localhost:8088/api/categories").then((res) => {
      const data = res.data.categories;

      dispatch(productsSlice.actions.setCategories(data));
    });
  }
);

export default productsSlice.reducer;
