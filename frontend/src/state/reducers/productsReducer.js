import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  product: {},
  categories: [],
  selectedID: null,
  modalImageURL: null,
  openModal: false,
  currencyRate: 0,
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
    setModalImageURL: (state, action) => {
      state.modalImageURL = action.payload;
    },
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
    setCurrencyRate: (state, action) => {
      state.currencyRate = action.payload;
    },
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
        dispatch(productsSlice.actions.setID(products[0].id));
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

export const fetchCurrencyRate = createAsyncThunk(
  "get_currency",
  async (_, { getState, dispatch }) => {
    axios.get("https://economia.awesomeapi.com.br/last/EUR-HUF").then((res) => {
      const data = res.data.EURHUF.high;

      dispatch(productsSlice.actions.setCurrencyRate(data));
    });
  }
);

export const postProduct = createAsyncThunk(
  "post_item",
  async (data, { getState, dispatch }) => {
    axios.post(`http://localhost:8088/api/`, { data }).then((res) => {
      dispatch(fetchProducts());
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

export const { setID, setModalImageURL, setOpenModal } = productsSlice.actions;

export default productsSlice.reducer;
