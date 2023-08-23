import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  product: {},
  editProduct: {},
  selectedID: null,
  categories: [],
  viewCategories: false,
  modalImageURL: null,
  openImageModal: false,
  openDeleteModal: false,
  currencyRate: 0,
  paginationPage: 1,
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
    setEditProduct: (state, action) => {
      state.editProduct = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setID: (state, action) => {
      state.selectedID = action.payload;
    },
    // TODO: ---------------------------------
    setViewCategories: (state, action) => {
      state.viewCategories = action.payload;
    },
    // TODO: ----------------------------------
    setModalImageURL: (state, action) => {
      state.modalImageURL = action.payload;
    },
    setOpenImageModal: (state, action) => {
      state.openImageModal = action.payload;
    },
    setOpenDeleteModal: (state, action) => {
      state.openDeleteModal = action.payload;
    },
    setCurrencyRate: (state, action) => {
      state.currencyRate = action.payload;
    },
    setPaginationPage: (state, action) => {
      state.paginationPage = action.payload;
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
      dispatch(productsSlice.actions.setPaginationPage(1));
      // set first element as a selected element
      const state = getState();
      const products = state.products.products;
      if (products.length) {
        dispatch(productsSlice.actions.setID(products[0].id));
        dispatch(productsSlice.actions.setEditProduct(products[0]));
      }
    });
  }
);

export const fetchHighPriceProducts = createAsyncThunk(
  "get_high_price_items",
  async (_, { getState, dispatch }) => {
    axios.get("http://localhost:8088/api/").then((res) => {
      const data = res.data.products;

      // sorting data
      const sortedData = data.sort((a, b) => b.price - a.price);
      // slice data 0-25
      const slicedData = sortedData.slice(0, 25);
      dispatch(productsSlice.actions.setProducts(slicedData));
      dispatch(productsSlice.actions.setPaginationPage(1));

      const state = getState();
      const products = state.products.products;
      if (products.length) {
        dispatch(productsSlice.actions.setID(products[0].id));
        dispatch(productsSlice.actions.setEditProduct(products[0]));
      }
    });
  }
);

export const fetchFilteredProducts = createAsyncThunk(
  "get_filtered_category_items",
  async (selectedCategory, { getState, dispatch }) => {
    axios.get("http://localhost:8088/api/").then((res) => {
      const data = res.data.products;
      // handle category filter
      const filteredData = data.filter((product) => {
        return product.category === selectedCategory;
      });

      dispatch(productsSlice.actions.setProducts(filteredData));
      dispatch(productsSlice.actions.setPaginationPage(1));
      // set first element as a selected element
      const state = getState();
      const products = state.products.products;
      if (products.length) {
        dispatch(productsSlice.actions.setID(products[0].id));
        dispatch(productsSlice.actions.setEditProduct(products[0]));
      }
    });
  }
);

export const fetchProduct = createAsyncThunk(
  "get_item",
  async (id, { getState, dispatch }) => {
    axios.get(`http://localhost:8088/api/${id}`).then((res) => {
      const data = res.data;

      dispatch(productsSlice.actions.setProduct(data));
    });
  }
);

export const patchProduct = createAsyncThunk(
  "patch_item",
  async ({ id, title, description, price }, { getState, dispatch }) => {
    axios
      .patch(`http://localhost:8088/api/${id}`, {
        data: { title, description, price },
      })
      .then(async (res) => {
        dispatch(fetchProducts());
        dispatch(productsSlice.actions.setPaginationPage(1));
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

export const fetchCurrencyRate = createAsyncThunk(
  "get_currency",
  async (_, { getState, dispatch }) => {
    axios.get("https://economia.awesomeapi.com.br/last/EUR-HUF").then((res) => {
      const data = res.data.EURHUF.high;

      dispatch(productsSlice.actions.setCurrencyRate(data));
    });
  }
);

export const {
  setID,
  setEditProduct,
  setModalImageURL,
  setOpenImageModal,
  setOpenDeleteModal,
  setViewCategories,
  setPaginationPage,
} = productsSlice.actions;

export default productsSlice.reducer;
