import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  product: {},
  categories: [],
  selectedID: null,
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
    setID: (state, action) => {
      state.selectedID = action.payload;
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

      const state = getState();
      const products = state.products.products;
      if (products.length) {
        dispatch(productsSlice.actions.setID(products[0].id));
      }
    });
  }
);

export const fetchHighPriceProducts = createAsyncThunk(
  "get_items",
  async (_, { getState, dispatch }) => {
    axios.get("http://localhost:8088/api/").then((res) => {
      const data = res.data.products;

      const sortedData = data.sort((a, b) => b.price - a.price);
      const slicedData = sortedData.slice(0, 25);
      dispatch(productsSlice.actions.setProducts(slicedData));

      const state = getState();
      const products = state.products.products;
      if (products.length) {
        dispatch(fetchProduct(products[0].id));
      }
    });
  }
);

export const fetchProduct = createAsyncThunk(
  "get_items",
  async (id, { getState, dispatch }) => {
    axios.get(`http://localhost:8088/api/${id}`).then((res) => {
      const data = res.data;

      dispatch(productsSlice.actions.setProduct(data));
    });
  }
);

export const deleteItem = createAsyncThunk(
  "delete_item",
  async (id, { getState, dispatch }) => {
    axios.delete(`http://localhost:8088/api/${id}`).then((res) => {
      dispatch(fetchProducts());
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

export const { setID } = productsSlice.actions;

export default productsSlice.reducer;
